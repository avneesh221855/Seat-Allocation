import {Injectable} from '@angular/core'
import {  } from "module";
import { Http,Headers,Response } from '@angular/http' ;
import { Request } from "../model/request";
@Injectable() 
export class RequestService {
    
     constructor(private http:Http) { }
     url='http://localhost:59360/api/Request/';
     private headers = new Headers({'Content-Type': 'application/json'});
     get(){
        return this.http
        .get(this.url)
        .map((Response)=>Response.json());
     }
    getByUserCode(userEmpCode){
        return this.http
        .get(this.url+'GetByRequestedBy/'+userEmpCode)
        .map((Response)=>Response.json());
    }
    getPendingRequests(){
        return this.http.get(this.url+'get/54707').map(response=>response.json());
      }
     post(request:Request){
         return this.http.post(this.url,request,{headers:this.headers})
         .subscribe();
     }
     onApprove(requestId,request:any){
        return this.http.put(this.url+requestId,request,{headers:this.headers});
     
      }
      onRejection(requestId:any)
      {
        return this.http.delete(this.url+requestId).subscribe();
      }
     
}
