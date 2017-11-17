import { TestBed, inject,async } from '@angular/core/testing';
import { MockBackend,MockConnection } from '@angular/http/testing';
import { HttpModule,Http,XHRBackend,Response,ResponseOptions,RequestMethod } from '@angular/http' ;
import { Floor } from '../../shared/model/floor'
import { AddFloorService } from '../../shared/services/add-floor.service';
const FloorMock = () => [
  { locationCode:'D01',buildingCode:'DB01',floorName:'1st Floor',openVacantSeats:23,abvSeats:40},
  { locationCode:'D02',buildingCode:'GNB01',floorName:'2nd Floor',openVacantSeats:33,abvSeats:50},
  { locationCode:'DU01',buildingCode:'DUB01',floorName:'1st Floor',openVacantSeats:23,abvSeats:60},
  { locationCode:'D01',buildingCode:'NB01',floorName:'1st Floor',openVacantSeats:23,abvSeats:70},
 ] ;
describe('AddFloorService', () => {

  let backend: MockBackend;
  let service: AddFloorService;
  let fakeFloors: Floor[];
  let response: Response;
  let locationId: string;
  let buildingId: string;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AddFloorService,
      { provide: XHRBackend, useClass: MockBackend }]
    })
    .compileComponents();
  }));
  beforeEach(inject([Http,XHRBackend],(http:Http,back:MockBackend) => {
    backend = back ;
    service = new AddFloorService(http);
    fakeFloors = FloorMock();
  
  }));

  describe("addFloor",()=>{


    it("Test should validate for valid resource urls",
    inject([AddFloorService],(service)=>{
    
      expect(service.floorUrl).toEqual('http://localhost:59360/api/FloorStructure/');
    }))
    
  it('should be created', inject([AddFloorService], (service: AddFloorService) => {
    expect(service).toBeTruthy();
  }));
  it('can instantiate service with "new"', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http should be provided');
    let service = new AddFloorService(http);
    expect(service instanceof AddFloorService).toBe(true, 'new service should be ok');
  }));
  it('can provide the mockBackend as XHRBackend',
  inject([XHRBackend],(backend:MockBackend) => {
    expect(backend).not.toBeNull('backend should be provided');
  }));
  it(' addFloor()', () => {
    
    backend.connections.subscribe((connection) => {   
    connection.mockRespond(new Response(new ResponseOptions({
      status:200,
        body: JSON.stringify(FloorMock)
        
      })));
     
      expect(connection.request.method).toEqual(RequestMethod.Post ,'should return with correct method');
    });  
      service.addFloor({ locationCode:'D01',buildingCode:'NB01',floorName:'1st Floor',openVacantSeats:23,abvSeats:40});
  });
  
})
  describe('getFloor() method', () => {
   
 
      
    
  it('should return Observable<Array<floors>>|| getFloors()',  inject([AddFloorService, XHRBackend], (service, mockBackend)  => {
    
    let resp = new Response(new ResponseOptions({status: 200, body: JSON.stringify(fakeFloors)}));
   
         mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(resp)
      
        });
   
        service.getFloors().subscribe((data) => {
       
               expect(data.length).toEqual(fakeFloors.length)
      });
  }));
    it('#Get should be OK returning no Floors', async(inject([], () => {
      let resp = new Response(new ResponseOptions({status: 200, body: {data: []}}));
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));
      buildingId = 'AB01';
      service.getFloors(buildingId)
        .subscribe(Floors => {
          expect(Floors.data.length).toBe(0, 'should have no Floors');
          expect(resp.status).toBe(200,'Should return Ok response')
        })
    })));
    it('GetFloorsByFloorId()', async(inject([], () => {
        let options = new ResponseOptions({status: 200, body: {data: fakeFloors.find(m=>m.buildingCode==='DB01')}});
        response = new Response(options) ;
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
      
      service.getFloorsByFloorId(12).subscribe(Floors => {
        
          expect(Floors.data.abvSeats).toBe(40,
            'should have expected no. of Floors');
        });
    })));
    

    describe("updateFloor() method ",()=>{

    it('updateFloors()', () => {
        
        backend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          status:200,
            body: JSON.stringify(FloorMock)
            
          })));
        
          expect(connection.request.method).toEqual(RequestMethod.Put ,'should return with correct method');
        });  
          service.updateFloors(13,{ locationCode:'D01',buildingCode:'NB01',floorName:'1st Floor',openVacantSeats:23,abvSeats:40});
  
      });
    })
  });
});