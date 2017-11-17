import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Request} from '../model/request';
import 'rxjs/add/operator/map';

@Injectable()
export class CsoUserService {

  constructor(private http:Http) { }
  response:any;
  url:string = 'http://localhost:59360/api/Request/';
  urlFloor:string='http://localhost:59360/api/FloorStructure/';
  private headers = new Headers({'Content-Type': 'application/json'});
  pending:any;
  getPendingRequests(){
    return this.http.get(this.url+'3456').map(response=>response.json());
  }
  onRejection(requestId:any)
  {
    return this.http.delete(this.url+requestId).subscribe();
  }
  onApprove(requestId,request:any){
    return this.http.put(this.url+requestId,request,{headers:this.headers})
    .map(response=>response.json());
  }
}
