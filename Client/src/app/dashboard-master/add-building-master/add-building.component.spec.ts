import { async, ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
//import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { LocationStructureService } from '../../shared/services/location-structure.service';
import {
 HttpModule, Http, BaseRequestOptions, XHRBackend, Response,
 ResponseOptions,
} from '@angular/http';
import { AddBuildingService } from '../../shared/services/add-building.service';
import{Router} from '@angular/router';
//import { RouterLinkStubDirective } from '../../testing/router-stub';
import { AddBuildingComponent } from './add-building.component';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
describe('AddBuildingComponent', () => {
 let component: AddBuildingComponent;
 let fixture: ComponentFixture<AddBuildingComponent>;
 let buildingservice:AddBuildingService
 let locationservice:LocationStructureService;
 let spy,spy2;
 let de:DebugElement;
 let el:HTMLInputElement;
 const data=[{name:'nishant',id:12,locationCode:"245",locationName:'agra'}]
 var testQuote= Observable.of(data)
 
 class RouterStub {
   navigateByUrl(url: string) { return url; }
 }
 beforeEach(async(() => {
  
   TestBed.configureTestingModule({
     imports:      [ FormsModule,HttpModule],
     declarations: [ AddBuildingComponent],
    
     providers: [
       LocationStructureService,
       AddBuildingService,
       { provide: Router,  useClass: RouterStub }
     ]    })
   .compileComponents();
 }));
 beforeEach(() => {
 
   fixture = TestBed.createComponent(AddBuildingComponent);
   component = fixture.componentInstance;
   locationservice=fixture.debugElement.injector.get(LocationStructureService);
   
   buildingservice=fixture.debugElement.injector.get(AddBuildingService);
    spy = spyOn(locationservice, 'getLocationName')
    .and.returnValue(Observable.of(data));
   spy2 = spyOn(buildingservice, 'addBuild')
   .and.returnValue(testQuote);
   
    //fixture.detectChanges();
 });
 it('should be created', () => {
   expect(component).toBeTruthy();
 });
 it('should show quote after  promise (async)', async(() => {
   fixture.detectChanges();
 
   fixture.whenStable().then(() => { 
     fixture.detectChanges();        
     de = fixture.debugElement.query(By.css('.form-control'));
     el = de.nativeElement;
     console.log("the value of el",el[0])
     expect(el[0].value).toBe("245")
   });
 }));
 it('should show spyvalue  after promise (fakeAsync)', fakeAsync(() => {

   tick();               
   fixture.detectChanges(); 
   de = fixture.debugElement.query(By.css('.form-control'));
   el = de.nativeElement;
   console.log(el[0])
   expect(el[0].value).toBe("245");
 }));
 //check location name from text field
 it('can get building name from text field', () => {
   de = fixture.debugElement.query(By.css('#buildingName'));
   el = de.nativeElement;
    component.model.buildingName='tower A';
       fixture.detectChanges();
   expect(el.attributes["ng-reflect-model"].value).toBe('tower A', 'should have location name ');
 });
//check click at add button
 it('should add new building after calling buildingservice',()=>  {
   fixture.detectChanges();
   de = fixture.debugElement.query(By.css('.btn'));
   el = de.nativeElement;
   component.model.buildingCode="101";
   component.model.buildingName="tower a";
   component.model.locationCode="201";
   el.click();




   
 });
});