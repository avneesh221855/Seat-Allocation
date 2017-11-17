import { Component, OnInit } from '@angular/core';
// import {REQUEST} from '../Mock-request'
// import {Request} from '../request'
@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {
request:Request[];
 v:string='';
 allocatedSeats:number=50;
 constructor() { }

 ngOnInit() {
  // this.request=REQUEST;
 }
validate(temp){

 if(temp>this.allocatedSeats){
 window.alert("Release Seats are more than allocated seats");
}}
}
