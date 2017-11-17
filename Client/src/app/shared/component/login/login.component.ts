import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  name:string;
  pass:any;
  login(){
  	console.log(this.name,this.pass);
  		if(this.name=="user" && this.pass=='123'){
  				this.router.navigate(['/app-sidenav']);
  		}
  		else if(this.name=="authority"&&this.pass=='123'){
  			this.router.navigate(['/app-dashboard-authority']);

  		}
  	 else if(this.name=="cso"&&this.pass=='123'){
  	 	this.router.navigate(['/app-dashboard-cso']);

  		}
  		else if(this.name=="master" && this.pass=='123'){
  	 	this.router.navigate(['/app-dashboard-master']);
  		}
  		else{
  			alert("invalid user");
  		}
  }

}
