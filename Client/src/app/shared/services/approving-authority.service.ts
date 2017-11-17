import { Injectable } from '@angular/core';
import {HttpModule,Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
// import {REQUEST} from './Mock-request'
@Injectable()
export class ApprovingAuthorityService {
  url:string='http://localhost:59360/api/Request';
  data:any;
data1:Array<any>;

  
  constructor(private http:Http) { }



  private headers=new Headers({'Content-Type':'application/json'});
getRequest()
{
return this.http.get(this.url).map((res:Response)=>res.json());

}



postRequest(id:any,item:any){
  console.log(item.status);
  return this.http.put(this.url+"/"+id ,item,{headers:this.headers});
}
}
