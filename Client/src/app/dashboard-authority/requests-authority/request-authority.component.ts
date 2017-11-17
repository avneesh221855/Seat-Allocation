import { Component, OnInit,Output,OnChanges } from '@angular/core';
import {ApprovingAuthorityService} from '../../shared/services/approving-authority.service';

@Component({
  selector: 'app-requests-authority',
  templateUrl: './request-authority.component.html',
  styleUrls: ['./request-authority.component.css']
})
export class RequestAuthorityComponent implements OnInit {
//@Output() request:any;
items:any;
  constructor(private approvingAuthorityService:ApprovingAuthorityService) { }
request:Array<Request>;
data1:any;
  ngOnInit() {
   // this.request=REQUEST;
    this.getData();
   // console.log(this.request);
  }



// getAuthorityName(id:number){


// }


  getData(){
this.approvingAuthorityService.getRequest().subscribe(data1=>{console.log("intitial data",data1);this.data1=data1;});
}
  acceptRequest(item:any){

console.log("accepted",item);
this.items=item;
this.items.status="forwarded";
console.log(this.request.indexOf(item))
this.request.splice((this.request.indexOf(item)),1);
this.approvingAuthorityService.postRequest(item.requestId,item);
console.log("object  acceptRequest"+this.items);

}
rejectRequest(item:any,temp:any){

  this.sendReason(item, temp);
  console.log("acceptreq",item);
  this.items=item;
  this.items.Status="rejected";
  console.log(this.request.indexOf(item))
  this.request.splice((this.request.indexOf(item)),1);
  this.approvingAuthorityService.postRequest(item.requestId,item);
  console.log("object rejectRequest"+this.items);
  

}

sendReason(item:any,temp:any){
console.log("temp is ",temp);
this.items=item;
this.items.Justification=temp;
console.log("data updated is ",this.request);
}

}
