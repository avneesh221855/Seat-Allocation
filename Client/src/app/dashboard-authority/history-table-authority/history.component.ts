import { Component, OnInit, Output, OnChanges } from '@angular/core';
import { Request } from '../../shared/model/request';
import { ApprovingAuthorityService } from '../../shared/services/approving-authority.service';
// import { REQUEST } from '../Mock-request';
@Component({
 selector: 'app-history',
 templateUrl: './history.component.html'
,
 styleUrls: ['./history.component.css']
})
export class HistoryAuthorityComponent implements OnInit {
 //@Output() request:any;
 items: any;
 constructor(private approvingAuthorityService: ApprovingAuthorityService) { 

 }
 request:Request[]=[];

 data2:Array<any>;
 test:any=[];
 k:any=10;
te:any=10;
 
 ngOnInit() {
   
this.getData();
 //  console.log(this.request);
   //console.log("the data from test is ",this.test);
 }

getData() {

 this.approvingAuthorityService.getRequest().subscribe(data2 => { console.log("intitial data", data2);
 for(let d of data2){
   
     console.log("testing ");
    if(d.status=='pending'){
   this.test.push(d);
   console.log("the data from test ashgafs is ",this.test);
   
   
    }
   }
 this.data2 = data2; });
 

    }
 acceptRequest(item: any,updatedseat) {
   this.items = item;
   this.items.status = "forwarded";
   console.log(this.items.status);
   this.items.justification="accepted";
   this.items.noOfseats=updatedseat;
console.log(item,updatedseat)
this.test.splice((this.test.indexOf(item)), 1);
this.approvingAuthorityService.postRequest(item.requestId,item).subscribe();

   
 

 }
 rejectRequest(item: any, temp: any) {
   this.sendReason(item, temp);
   this.items = item;
   this.items.status = "rejected";
    this.test.splice((this.test.indexOf(item)), 1);
   
   this.approvingAuthorityService.postRequest(item.requestId,item);
 }

 sendReason(item: any, temp: any) {
   this.items = item;
   this.items.justification = temp;
 }

}