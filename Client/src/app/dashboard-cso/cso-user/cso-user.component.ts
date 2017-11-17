import { Component, OnInit } from '@angular/core';
import { Request } from '../../shared/model/request';
import { CsoUserService } from '../../shared/services/cso-user.service';
import { AddFloorService } from '../../shared/services/add-floor.service';
import { RequestService } from "../../shared/services/request.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-cso-user',
  templateUrl: './cso-user.component.html',
  styleUrls: ['./cso-user.component.css']
})
export class CsoUserComponent implements OnInit {

  constructor(private csocrud: CsoUserService, private floorService: AddFloorService, private requestService:RequestService,
               private router: Router
              ) {
  }
  token: any;
  request: any[];
  bar: any;
  requestedFloor: any;
  selectedRequest: any;
  item:any;
 
  ngOnInit() {                      //fetch all the approved pending requests.
    this.requestService.getPendingRequests().subscribe(request => { this.request = request });
  }
  onReject(user: any) {             //reject approved pending request.
    let id = user.requestId;

    this.requestService.onRejection(id);
    this.request.splice((this.request.indexOf(user)), 1);
  }



  onViewRequest(user) {
    this.bar = 1;
    let floorCode = user.floorCode;
    this.floorService.getFloorsByFloorId(floorCode).subscribe(requestedFloor => {
      this.requestedFloor = requestedFloor
      this.searchData();
      this.selectedRequest = user;
    });
  }
  searchData() {
    this.token = 1;
    this.barChartLabels = ['Seats'];
    this.barChartData = [
      { data: [this.requestedFloor.totalSeats], label: 'Total Seat' },
      { data: [this.requestedFloor.openAllocatedSeats], label: 'Open Allocated Seat' },
      { data: [this.requestedFloor.totalVacantSeats], label: 'Total Vacant Seat' },
      { data: [this.requestedFloor.abvSeats], label: 'ABV Seat' },
      { data: [this.requestedFloor.openVacantSeats], label: 'Open Vacant Seat' }
    ];
  }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[];
  public chartClicked(e: any): void {
    console.log(e);
  }
  onSeat(value) {
    if (value == 'open') {
      this.token = 2;
    }
    if (value == 'closed') {
      this.token = 3;
    }
  }
  
  onAlloted() {
   

    if (this.token == 2 && this.requestedFloor.openVacantSeats >= (+this.selectedRequest.noOfseats)) {
      this.selectedRequest.status = "approved";
      let requestId = this.selectedRequest.requestId;
      this.requestedFloor.openVacantSeats -= (+this.selectedRequest.noOfseats);
      this.requestedFloor.totalVacantSeats -= (+this.selectedRequest.noOfseats);
      this.requestedFloor.openAllocatedSeats += (+this.selectedRequest.noOfseats);
      let floorCode = this.requestedFloor.floorCode
      this.floorService.updateFloors(floorCode, this.requestedFloor).subscribe(result => {
        if (result["_body"] == "success") {
          this.requestService.onApprove(requestId, this.selectedRequest).subscribe(result => {
            if (result["_body"] == "success") {
              alert("seats allocated successfully");
            }
            else {
              alert("something went wrong. Please try again after sometime.");
            }
          });
        }
        else {
          alert("something went wrong. Please try again after sometime.");
        }

      });
      this.request.splice(this.request.indexOf(this.selectedRequest), 1);
      this.token='';
      this.bar='';
    }
    else {
      if (this.token == 3 && this.requestedFloor.abvSeats >= (+this.selectedRequest.noOfseats)) {
        // 
        this.selectedRequest.status = "approved";
        let requestId = this.selectedRequest.requestId;
        this.requestedFloor.abvSeats = this.requestedFloor.abvSeats - (+this.selectedRequest.noOfseats);
        this.requestedFloor.totalVacantSeats = this.requestedFloor.totalVacantSeats - (+this.selectedRequest.noOfseats);
        this.requestedFloor.closedAllocatedSeats = this.requestedFloor.openAllocatedSeats + (+this.selectedRequest.noOfseats);
        let floorCode = this.requestedFloor.floorCode
        this.floorService.updateFloors(floorCode, this.requestedFloor).subscribe(result => {
          if (result["_body"] == "success") {
            this.requestService.onApprove(requestId, this.selectedRequest).subscribe(result => {
              if (result["_body"] == "success") {
                alert("seats allocated successfully");
              }
              else {
                alert("something went wrong. Please try again after sometime.");
              }
            });
          }
          else {
            alert("something went wrong. Please try again after sometime.");
          }

        });

        this.request.splice(this.request.indexOf(this.selectedRequest), 1);
        this.token='';
        this.bar='';
      }

      else {

        alert("seats alloted are greater than available seats");


      }

    }
   
    this.router.navigate(['/app-cso-user']);
  }

  //service method needs to be called. And subtract total seats and update database.
}