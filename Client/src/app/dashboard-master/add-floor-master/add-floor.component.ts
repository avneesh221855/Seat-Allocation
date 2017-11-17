import { Component, OnInit } from '@angular/core';

import { Floor } from '../../shared/model/floor'
import { AddFloorService } from '../../shared/services/add-floor.service';
import { LocationStructureService } from '../../shared/services/location-structure.service'
import { AddBuildingService } from '../../shared/services/add-building.service';

@Component({
  selector: 'add-floor',
  templateUrl: './add-floor.component.html',
  styleUrls: ['./add-floor.component.css']
})
export class AddFloorComponent implements OnInit {

  constructor(private floorService: AddFloorService, private locationService:LocationStructureService , private buildingService: AddBuildingService) { }

  locations:any[];
  floorsData:any;
  buildings:any[];
  model = new Floor( '','','',null,null);
  ngOnInit() {
    this.locationService.getLocationName().subscribe(locations=>{this.locations=locations;  
    }) ;

  }

select(){
  console.log(this.model.locationCode); 
  this.buildingService.getBuildingName(this.model.locationCode).subscribe(buildings=>{this.buildings=buildings;
  }) ;
}
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }


  
  addFloor(){
    console.log(this.model);
      this.floorService.addFloor(this.model).subscribe(floorsData=>{this.floorsData=floorsData});
  }

}
