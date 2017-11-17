import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentcllocation',
  templateUrl: './currentcllocation.component.html',
  styleUrls: ['./currentcllocation.component.css']
})
export class CurrentcllocationComponent implements OnInit {
temp1:any;
temp:any;
token:any;
  constructor() { }

  ngOnInit() {
  }
searchData(temp:any,temp1:any){
	console.log(temp);
	console.log(temp1);
	this.token=1;

}


 public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  public barChartLabels:string[] = ['room 1', 'room 2', 'room 3', 'room 4', 'room 5'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56], label: 'Occupied'},
    {data: [28, 48, 40, 19, 86], label: 'free'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  
}
