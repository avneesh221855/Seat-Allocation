import {Injectable} from '@angular/core'

import { Http,Headers,Response } from '@angular/http' ;


@Injectable() 
export class CcCodeService {
    
      constructor(private http:Http) { }
     url='http://localhost:59360/api/CcCode';

     get(){
        return this.http
        .get(this.url)
        .map((Response)=>Response.json());
     }
}