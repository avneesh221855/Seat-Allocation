import { Component, OnInit } from '@angular/core';
import {Request}from '../../shared/model/request';
import { AddBuildingService } from '../../shared/services/add-building.service';
import { LocationStructureService } from '../../shared/services/location-structure.service'
import { AddFloorService } from '../../shared/services/add-floor.service';
import { CcCodeService } from "../../shared/services/cc-code.service";
import { EntityService } from "../../shared/services/entity.service";
import { RequestService } from "../../shared/services/request.service";


@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent implements OnInit {
  locations:any[];
  buildings:any[];
  floors:any[];
  ccCodes:any[];
  entities:any[];
  model =  new Request('',null,null,null,null,null,null,null,null,null,null,null);
  constructor(
      private locationService:LocationStructureService,
      private buildingService:AddBuildingService,
      private floorService :AddFloorService,
      private ccCodeService:CcCodeService,
      private entityService: EntityService,
      private requestService: RequestService

      ) { }

  ngOnInit() {
    this.locationService.getLocationName().subscribe(locations=>{this.locations=locations;
    
    this.ccCodeService.get().subscribe(ccCode=>{this.ccCodes = ccCode
    this.entityService.get().subscribe(entities=>this.entities=entities)
        });
    });  
  }
  submitted = false;
  
  onSubmit() { this.submitted = true; }

  selectLocation(){
    this.buildingService.getBuildingName(this.model.locationCode)
    .subscribe(buildings=>{this.buildings=buildings;
    }) ;
  }
  selectBuilding(){
    this.floorService.getFloors(this.model.buildingCode)
    .subscribe(floors=>{this.floors=floors;
      console.log(floors);
    });

  }
 
  checkSeats(){
    if(this.model.noOfSeats<1){
      alert('no of seats should be greator than zero');
    }
  }

  addRequest(){
    delete this.model.requestId;
    delete this.model.requestedOn;
    this.model.requestBy = '12345';
    this.model.floorCode = +this.model.floorCode;
    this.model.toDate=this.model.toDate+'T00:00:00';
    console.log(this.model);
    this.requestService.post(this.model);
  }
}
