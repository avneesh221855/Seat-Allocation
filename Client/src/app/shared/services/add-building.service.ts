import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';

import 'rxjs/add/operator/toPromise'
import { Building } from '../model/building';

@Injectable()
export class AddBuildingService {

  constructor(private http:Http) { }
  
    private backUrl = 'http://localhost:59360/api/LocationStructure';
    private addUrl = 'http://localhost:59360/api/BuildingStructure';
    private buildUrl = 'http://localhost:59360/api/BuildingStructure/GetByLocationId/';
    private headers = new Headers({'Content-Type': 'application/json'});
  
    getBuildingName(locationCode)
    {
      return this.http
      .get(this.buildUrl+locationCode)
      .map((response)=>response.json());
    }
   
  
    addBuild(building:Building)  {
      console.log(building);
      return this.http
      .post(this.addUrl, building,{headers: this.headers});
      
    }


}
