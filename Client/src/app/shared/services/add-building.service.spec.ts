import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AddBuildingService } from './add-building.service';
import { Building } from '../model/building';
const mockData = () => [{
     locationCode: "100",
     buildingName: "tower a",
     buildingCode: "200"},
     {
        locationCode: "101",
        buildingName: "tower a",
        buildingCode: "200"},
        {
            locationCode: "102",
            buildingName: "tower a",
            buildingCode: "200"}

] as Building[]
describe("add building service testing",()=>{
let service:AddBuildingService;
beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpModule],
            providers:[AddBuildingService,{provide:XHRBackend, useClass:MockBackend}]
        
        })
        

    })
    describe("addBuild()",()=>{
      it("Test should validate for valid resource urls",
    inject([AddBuildingService],(service)=>{
      expect(service.backUrl).toEqual('http://localhost:59360/api/LocationStructure')
      expect(service.addUrl).toEqual('http://localhost:59360/api/BuildingStructure')
      expect(service.buildUrl).toEqual('http://localhost:59360/api/BuildingStructure/GetByLocationId/')
      
    
    }))
        it('should instantiate service when inject service ',
        inject([AddBuildingService, XHRBackend], (service, mockBackend) => {
  
          let mock = mockData();
        //  console.log("my mock data is ",mock);
          expect(service instanceof AddBuildingService).toBe(true);
  
        }));
  
  
  
      it('should instantiate service when inject service with new key word ',
        inject([Http], (http) => {
          expect(http).not.toBeNull('');
          let service = new AddBuildingService(http);
          expect(service instanceof AddBuildingService).toBe(true);
        }));
  
      it('should intitiate XHRBackend when injected ',
        inject([XHRBackend], (mockBackend) => {
          expect(mockBackend).not.toBeNull("should  not be null");
        }));
  
  it("post method should return observable",
inject([AddBuildingService,XHRBackend],(service,mockBackend)=>{
    let mock=mockData();
    mockBackend.connections.subscribe(connection=>{
        connection.mockRespond(new Response(new ResponseOptions({
            body:JSON.stringify(mock)
        })))
    })
    service.getBuildingName("100").subscribe((result)=>
    
    {
        expect(result[0].locationCode).toEqual("100");
        expect(result[1].locationCode).toEqual("101");
        expect(result[2].locationCode).toEqual("102");
    })
    


}));

it('should return ok status for updatation operation',
inject([AddBuildingService, XHRBackend], (approvingService, mockBackend) => {
  let data: Building = new Building("100","towera","200");

  //console.log("data is ",data);

  let mok = new Response(new ResponseOptions({ status: 200, body: { data } }));

  mockBackend.connections.subscribe((connection) => {
    connection.mockRespond(mok)

  });

  approvingService.addBuild
  (data).subscribe((result) => {

    expect(result.status).toBe(200);


  });
}))

})


});
