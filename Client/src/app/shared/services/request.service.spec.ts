import { TestBed, inject } from '@angular/core/testing';
import { Request } from '../../shared/model/request';
import {
 HttpModule,
 Http,
 Response,
 ResponseOptions,
 XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RequestService } from './request.service';

const mockResponse =[
 { requestId: "1",requestBy: "xyz",empCode: "authorit123",ccCode: "123c",entity: "nl",buildingCode:"towera",locationCode:"noida",floorCode: 1,
 status: "pending",noOfSeats:1213,requestedOn: "25thjune",toDate: "26thjune"    } ,
 { requestId: "2",requestBy: "avneesh",empCode: "authorit123",ccCode: "123c",entity: "nl",buildingCode:"towera",locationCode:"noida",floorCode: 1,
 status: "pending",noOfSeats:1213,requestedOn: "25thjune",toDate: "26thjune"    } ,
 { requestId: "3",requestBy: "avneesh",empCode: "authorit123",ccCode: "123c",entity: "nl",buildingCode:"towera",locationCode:"noida",floorCode: 1,
 status: "pending",noOfSeats:1213,requestedOn: "25thjune",toDate: "26thjune"    } ,
 { requestId: "4",requestBy: "avneesh",empCode: "authorit123",ccCode: "123c",entity: "nl",buildingCode:"towera",locationCode:"noida",floorCode: 1,
 status: "pending",noOfSeats:1213,requestedOn: "25thjune",toDate: "26thjune"    } ,  
 { requestId: "4",requestBy: "avneesh",empCode: "authorit123",ccCode: "123c",entity: "nl",buildingCode:"towera",locationCode:"noida",floorCode: 1,
 status: "pending",noOfSeats:1213,requestedOn: "25thjune",toDate: "26thjune"    } ,
 { requestId: "5",requestBy: "avneesh",empCode: "authorit123",ccCode: "123c",entity: "nl",buildingCode:"towera",locationCode:"noida",floorCode: 1,
 status: "pending",noOfSeats:1213,requestedOn: "25thjune",toDate: "26thjune"    } ,
 ] ; 

 describe('RequestService', () => {
   
     let spy:jasmine.Spy;
         let response: Response;
         let backend: MockBackend;
         let service: RequestService ;
       beforeEach(async() => {
         TestBed.configureTestingModule({
             imports:[HttpModule],
           providers: [RequestService ,{ provide: XHRBackend, useClass: MockBackend }]
         });
       });

       it("Test should validate for valid resource urls",
       inject([RequestService],(service)=>{
       
         expect(service.url).toEqual('http://localhost:59360/api/Request/');
       }))
       
       it('should return Observable<Array<Requests>> || get()',  inject([RequestService, XHRBackend], (service, mockBackend)  => {
           
           let options = new ResponseOptions({status: 200, body: JSON.stringify(mockResponse)});
           response = new Response(options);
                mockBackend.connections.subscribe((connection) => {
               connection.mockRespond(response)
               });
         
               service. get().subscribe((data) => {
                 expect(data.length).toBe(mockResponse.length);
                 expect(data[0].status).toEqual('pending');
             });
       
         }));

         it('should return Observable<<Requests>> ||   getByUserCode()',  inject([RequestService, XHRBackend], (service, mockBackend)  => {
           
           let options = new ResponseOptions({status: 200, body: JSON.stringify(mockResponse[0])});
           response = new Response(options);
                mockBackend.connections.subscribe((connection) => {
               connection.mockRespond(response)
               });
         
               service. getByUserCode(1).subscribe((data) => {
                 expect(data.status).toEqual('pending');
             });
       
         }));
         it('should return Observable<<Requests>> ||  getPendingRequests()',  inject([RequestService, XHRBackend], (service, mockBackend)  => {
           
           let options = new ResponseOptions({status: 200, body: JSON.stringify(mockResponse[0])});
           response = new Response(options);
                mockBackend.connections.subscribe((connection) => {
               connection.mockRespond(response)
               });
         
               service. getPendingRequests(1).subscribe((data) => {
                 expect(data.status).toEqual('pending');
             });
       
         }));

         it('should save updates to an existing Request entry when onApprove() called || onApprove()',
         inject([RequestService, XHRBackend], (service, mockBackend) => {
         let data: Request = new Request(  "1", "xyz", "authorit123", "123c", "nl","towera","noida", 1, "pending",1213, "25thjune", "26thjune"    );
         
         let resp = new Response(new ResponseOptions({status: 200, body: {data}}));
         mockBackend.connections.subscribe((connection)  => {
             connection.mockRespond(resp)
           });
        service.onApprove(data.requestBy, data).subscribe((data1)=>{

            console.log("the data value from request",data1);
           expect(data1.status).toBe(200);
         });
       
         }));
       });