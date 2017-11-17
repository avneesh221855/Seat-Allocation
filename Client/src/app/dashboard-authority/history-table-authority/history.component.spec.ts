import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { ApprovingAuthorityService } from '../../shared/services/approving-authority.service';
import { HistoryAuthorityComponent } from './history.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { browser, element, by } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/Observable/of';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { Request } from '../../shared/model/request';
describe('HistoryAuthorityComponent', () => {
  let comp: HistoryAuthorityComponent;
  let fixture: ComponentFixture<HistoryAuthorityComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let spy: jasmine.Spy;
  let spy1:jasmine.Spy;
  let spy2:jasmine.Spy;
  let authorityService: ApprovingAuthorityService;
  let requestData: Request[] = [

    {
      requestId: "1",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: 8,
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "03/08/06",
      toDate: "03/08/06"
    },

    {
      requestId: "2",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: 8,
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "03/08/06",
      toDate: "03/08/06"
    }
    ,
    {
      requestId: "3",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: 8,
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "03/08/06",
      toDate: "03/08/06"
    },
    {
      requestId: "4",
      requestBy: "avneesh",
      empCode: "authorit123",
      ccCode: "123c",
      entity: "nl",
      buildingCode: "towera",
      locationCode: "noida",
      floorCode: 8,
      status: "pending",
      noOfSeats: 1213,
      requestedOn: "03/08/06",
      toDate: "03/08/06"
    }
    

  ]
beforeEach(async(() => {

    TestBed.configureTestingModule({

      imports: [HttpModule],
      declarations: [HistoryAuthorityComponent],
      providers: [ApprovingAuthorityService]
    }).compileComponents()
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAuthorityComponent);

    comp = fixture.componentInstance; // BannerComponent test instance
    authorityService = fixture.debugElement.injector.get(ApprovingAuthorityService);
    spy = spyOn(authorityService, 'getRequest')
    .and.returnValue(Observable.of(requestData));
  
    spy1 = spyOn(authorityService, 'postRequest')
    .and.returnValue(Observable.of(requestData));

     });
it('getRequest() function test', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(comp.data2).toEqual(requestData);
   // console.log("comp----------",comp.data2);
    //console.log("req",requestData);
  }));

 it("accept request() function test  ", fakeAsync(() => {

  fixture.detectChanges();
  de = fixture.debugElement.query(By.css('.clk'));
  el = de.nativeElement;
  console.log("the value of el is",el);
  el.click();
  fixture.detectChanges();
  tick();
console.log("thee value of item tick",comp.items);
  expect(comp.items.status).toEqual("forwarded");
  expect(comp.items.justification).toEqual("accepted");
  expect(comp.items.noOfSeats).toEqual(requestData[0].noOfSeats);
}));

// it('rejectReject() function testing ',fakeAsync(()=>{

//   fixture.detectChanges();
 
//   de = fixture.debugElement.query(By.css('.rjt'));
//   el = de.nativeElement;
// console.log("reject el",el.attributes);
  
//   fixture.detectChanges();


//   el.click();
// fixture.detectChanges();
// tick();

//  // comp.sendReason();
// console.log("comp result ");
// //expect(comp.sendReason).toHaveBeenCalled();
// console.log("this is altered",comp.items);
// expect(comp.items.status).toEqual("rejected");
// //expect(comp.items.justification).toEqual("bad user");
// }));




});



