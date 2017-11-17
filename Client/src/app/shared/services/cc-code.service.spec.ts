import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { CcCodeService } from './cc-code.service';
import { CcCode } from '../model/cc-code';

const mockData = () => [{
    CcCodeId :"100",
    Status :"active"
}
,
{
    CcCodeId :"101",
    Status :"deactive"
},
{
    CcCodeId :"102",
    Status :"active"
},
{
    CcCodeId :"103",
    Status :"deactive"
}

] as CcCode[]
describe("cc-code service tresting",()=>{
    let service:CcCodeService;
    let mock:CcCode[];
    beforeEach(()=>{
TestBed.configureTestingModule({
imports:[HttpModule],
providers:[CcCodeService,{provide:XHRBackend, useClass:MockBackend}]
})
})

it("Test should validate for valid resource urls",
inject([CcCodeService],(service)=>{

  expect(service.url).toEqual('http://localhost:59360/api/CcCode');
}))
it("get() method testing ",

inject([CcCodeService, XHRBackend],(service ,mockBackend)=>{

    let mock=mockData();
    mockBackend.connections.subscribe(connection=>{
        connection.mockRespond(new Response(new ResponseOptions({
            body:JSON.stringify(mock)
        })))
    })
service.get().subscribe((result)=>
{
    expect(result[0].CcCodeId).toEqual("100");
    expect(result[1].CcCodeId).toEqual("101");
    expect(result[2].CcCodeId).toEqual("102");
})
})
)});