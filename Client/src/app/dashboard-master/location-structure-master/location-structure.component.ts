import { Component, OnInit } from '@angular/core';

import { Location } from '../../shared/model/location-structure';
import { LocationStructureService } from '../../shared/services/location-structure.service';

@Component({
  selector: 'location-structure',
  templateUrl: './location-structure.component.html',
  styleUrls: ['./location-structure.component.css']
})
export class LocationStructureComponent implements OnInit {

  constructor(private locationService : LocationStructureService) { }

  ngOnInit() {
  }
  
  

  model = new Location( '', '', null, '');
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }

  addLocation(location:any){
        this.locationService.add(location);
  }


}
