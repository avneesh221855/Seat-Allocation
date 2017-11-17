import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http' ;

import 'rxjs/add/operator/toPromise'
import { Floor } from '../model/floor';

@Injectable()
export class AddFloorService {

  constructor(private http:Http) { }
  
    private floorUrl = 'http://localhost:59360/api/FloorStructure/';
    private headers = new Headers({'Content-Type': 'application/json'});
  
    

    
  
  addFloor(floor:Floor)  {
      console.log(floor);
      return this.http
      .post(this.floorUrl, floor,{headers: this.headers})
     
    }

  getFloors(buildingCode:any)
  {
    return this.http
    .get(this.floorUrl+'GetByBuildingCode/'+buildingCode)
    .map((Response)=>Response.json());
  }
getFloorsByFloorId(floorCode){
  return this.http
  .get(this.floorUrl+'Get/'+floorCode)
  .map((Response)=>Response.json());
}
updateFloors(floorCode,floor){
  return this.http.put(this.floorUrl+floorCode,floor,{headers:this.headers});
}
}