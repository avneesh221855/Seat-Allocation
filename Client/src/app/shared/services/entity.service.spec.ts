
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { EntityService } from './entity.service';
import { Entity } from '../model/entity';

const mockData = () => [

{EntityName :"ntl" ,
EntityId : 100,
Status :"active"},
{EntityName :"ess" ,
EntityId : 101,
Status :"active"},
{EntityName :"ntl" ,
EntityId : 102,
Status :"active"}

] as Entity[]

describe("entity-service testing",()=>{

beforeEach(()=>{
TestBed.configureTestingModule({

    imports:[HttpModule],
    providers:[EntityService,{provide:XHRBackend ,useClass:MockBackend},
    
    
    ]}
)
    
});


let mock:Entity[];
let service:EntityService;

it("Test should validate for valid resource urls",
inject([EntityService],(service)=>{

  expect(service.url).toEqual('http://localhost:59360/api/Entity');
}))

it('should instantiate service when inject service ',
inject([EntityService, XHRBackend], (approvingService, mockBackend) => {


  expect(approvingService instanceof EntityService).toBe(true);

}));



it('should instantiate service when inject service with new key word ',
inject([Http], (http) => {
  expect(http).not.toBeNull('');
  let service = new EntityService(http);
  expect(service instanceof EntityService).toBe(true);




}));

it('should intitiate XHRBackend when injected ',
inject([XHRBackend], (mockBackend) => {
  expect(mockBackend).not.toBeNull("should  not be null");





}));








it('get method  should retiurn return an observablew',
inject([EntityService, XHRBackend],(service,mockBackend)=>{
 let mock=mockData();
mockBackend.connections.subscribe((connection)=>{
  connection.mockRespond(new Response(new ResponseOptions({
            body:JSON.stringify(mock)
        })));
    })
console.log("mcok response from entity",mock);
    service.get().subscribe((result)=>{
        console.log("the entity module result is ",result);
        expect(result[0].EntityId).toEqual(100);
        expect(result[1].EntityId).toEqual(101);
        expect(result[2].EntityId).toEqual(102);

    })
})

)



})