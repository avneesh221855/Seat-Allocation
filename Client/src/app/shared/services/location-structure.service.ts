import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { Location } from '../model/location-structure' ;

@Injectable()
export class LocationStructureService {

  constructor(private http:Http) { }

  private backUrl = 'http://localhost:59360/api/LocationStructure';
  private headers = new Headers({'Content-Type': 'application/json'});

  getLocationName()
  {
    return this.http
    .get(this.backUrl)
    .map((response)=>response.json());
  }

  add(location:Location)  {
    return this.http
    .post(this.backUrl, location,{headers: this.headers})
    .toPromise()
    .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
