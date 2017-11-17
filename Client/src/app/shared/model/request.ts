export class Request
{

    constructor(    
       public requestId: string,
       public  requestBy: string,
       public  empCode: string,
       public  ccCode: string,
       public  entity: string,
       public  buildingCode:string,
       public  locationCode:string,
       public  floorCode: number,
       public   status: string,
       public   noOfSeats:number,
       public   requestedOn: string,
       public  toDate: string){}
}