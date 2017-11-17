import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http' ;

import { Floor } from '../../shared/model/floor';

@Injectable()
export class AddFloorService {

  constructor(private http:Http) { }
  
    private backUrl = 'http://localhost:63670/api/news';
    private headers = new Headers({'Content-Type': 'application/json'});
  
    getLocationName()
    {
      return this.http
      .get(this.backUrl)
      .map((response)=>response.json());
    }

    getBuildingName()
    {
      return this.http
      .get(this.backUrl)
      .map((response)=>response.json());
    }
  
    addFloor(floor:Floor)  {
      return this.http
      .post(this.backUrl, floor,{headers: this.headers})
      .toPromise()
      .catch(this.handleError);
    }
  
  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }



}
