import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ApprovingAuthorityService } from './approving-authority.service';
import { Request } from '../model/request';


const mockResponse = () =>


  [
    {
      requestId: "1",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: 1,
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"
    },
    {
      requestId: "2",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: "1st",
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"
    },
    {
      requestId: "3",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: "1st",
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"

    },
    {
      requestId: "4",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: "1st",
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"

    },
    {
      requestId: "5",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: "1st",
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"

    },
    {
      requestId: "6",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: "1st",
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"

    },
    {
      requestId: "7",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: "1st",
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"


    },
    {
      requestId: "8",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: "1st",
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"



    },
    {
      requestId: "9",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: "1st",
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "25thjune",
      toDate: "26thjune"
}] as Request[];

//import { VIMEO_API_URL } from '../config';

describe('ApprovingAuthorityService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [

        ApprovingAuthorityService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('getRequest()', () => {

    let mock: Request[];

it("Test should validate for valid resource urls",
inject([ApprovingAuthorityService],(approvingService)=>{

  expect(approvingService.url).toEqual('http://localhost:59360/api/Request');
}))
    it('should instantiate service when inject service ',
      inject([ApprovingAuthorityService, XHRBackend], (approvingService, mockBackend) => {

        let mock = mockResponse();
        console.log("my mock data is ",mock);
        expect(approvingService instanceof ApprovingAuthorityService).toBe(true);

      }));



    it('should instantiate service when inject service with new key word ',
      inject([Http], (http) => {
        expect(http).not.toBeNull('');
        let service = new ApprovingAuthorityService(http);
        expect(service instanceof ApprovingAuthorityService).toBe(true);




      }));

    it('should intitiate XHRBackend when injected ',
      inject([XHRBackend], (mockBackend) => {
        expect(mockBackend).not.toBeNull("should  not be null");
}));





    it('should return an Observable<Array<Request>>',
      inject([ApprovingAuthorityService, XHRBackend], (approvingService, mockBackend) => {
        let mock = mockResponse();

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mock)
          })));
        });

        approvingService.getRequest().subscribe((newdata) => {
          console.log(newdata);
          //  console.log("data is ",newdata.data[0].length);
          expect(newdata.length).toBe(mock.length);
          expect(newdata[0].requestId).toEqual('1');
          expect(newdata[0].requestId).not.toBeNull('');
          expect(newdata[1].requestId).toEqual('2');
          expect(newdata[2].requestId).toEqual('3');
          expect(newdata[3].requestId).toEqual('4');

        });

      }));



    it('should return ok when  no request ',
      inject([ApprovingAuthorityService, XHRBackend], (approvingService, mockBackend) => {
        let mok = new Response(new ResponseOptions({ status: 200, body: { data: [] } }));

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mok)
          })));
        });

        approvingService.getRequest().subscribe((newdata) => {
          //   console.log(newdata);



          expect(newdata._body.data.length).toBe(0, 'when we have zero request');
          expect(newdata.status).toEqual(200);

        });

      }));
  });


  describe('postRequest()', () => {
    let mock: Request[];



    it('should instantiate service when inject service ',
      inject([ApprovingAuthorityService, XHRBackend], (approvingService, mockBackend) => {

        let mock = mockResponse();
//        console.log(mock);
        expect(approvingService instanceof ApprovingAuthorityService).toBe(true);

      }));


    it('should instantiate service when inject service with new key word ',
      inject([Http], (http) => {
        expect(http).not.toBeNull('');
        let service = new ApprovingAuthorityService(http);
        expect(service instanceof ApprovingAuthorityService).toBe(true);




      }));

    it('should intitiate XHRBackend when injected ',
      inject([XHRBackend], (mockBackend) => {
        expect(mockBackend).not.toBeNull("should  not be null");





   }));
it('should return ok status for updatation operation',
      inject([ApprovingAuthorityService, XHRBackend], (approvingService, mockBackend) => {
        let data: Request = new Request("9",
          "avneesh",
          "authorit123",
          "123c",
          "nl",
          "towera",
          "noida",
          3,
          "pending",
          1213,
          "25thjune",
          "26thjune");

        //console.log("data is ",data);

        let mok = new Response(new ResponseOptions({ status: 200, body: { data } }));
  //      console.log("mok is ", mok)
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(mok)

        });
 
        approvingService.postRequest(data.requestId, data).subscribe((result) => {
          //console.log("result is ",data);
    //      console.log("result is ",result);
          expect(result.status).toBe(200);


          //  expect(mock._body.data typeof string).toBe(true);
          //   expect(newdata._body.data.length).toBe(0,'when we have zero request');
          //   expect(newdata.status).toEqual(200);

        });
      }))
  });
});
