import { Component, OnInit } from '@angular/core';
import{Router} from'@angular/router';

import { Building } from '../../shared/model/building';
import { AddBuildingService } from '../../shared/services/add-building.service';
import { LocationStructureService } from '../../shared/services/location-structure.service'

@Component({
  selector: 'add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {

  constructor(private locationStructure: LocationStructureService, private buildService :AddBuildingService,private router:Router) { }
 
  locations:any[];

  ngOnInit() {
    this.locationStructure.getLocationName().subscribe(locations=>this.locations=locations) ;
  }

  model = new Building( '', '','');
  
  submitted = false;
  
  onSubmit() { this.submitted = true;
      this.router.navigate(['/add-building'])

   }


  addBuilding(building:any){
   console.log(building);
    this.buildService.addBuild(building);
  }

}
