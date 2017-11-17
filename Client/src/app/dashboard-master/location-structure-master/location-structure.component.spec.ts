import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Location } from '../../shared/model/location-structure';
import { LocationStructureComponent } from './location-structure.component';
import { LocationStructureService } from '../../shared/services/location-structure.service' ;
//Modules used for testing
import { FormsModule } from '@angular/forms' ;
import { HttpModule } from '@angular/http' ;
describe('LocationStructureComponent', () => {
  //Typescript Declarations
  let component: LocationStructureComponent;
  let fixture: ComponentFixture<LocationStructureComponent>;
  let de: DebugElement;
  let mockLocation: Location;
  let responseLocation : Location;
  let locationService: LocationStructureService;
  let spy: jasmine.Spy; 
  let element: HTMLElement;
  let inputLocationCode: HTMLInputElement;
  let inputLocationName: HTMLInputElement;
  let inputCsoOwnerName: HTMLInputElement;
   // beforeEach is called once before every `it` block in a test.
  // Use this to configure to the component, inject services etc.
  beforeEach(async(() => {     ////async before is used for compiling external templates which is any async activity
    TestBed.configureTestingModule({
      imports: [HttpModule,FormsModule],
      declarations: [ LocationStructureComponent ],
      providers: [LocationStructureService] 
    })
    .compileComponents();     //compile template and css
  }));
  beforeEach(() => {
    //This one is synchronous async function
    fixture = TestBed.createComponent(LocationStructureComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.location-form'));
    element = de.nativeElement;
    fixture.detectChanges();
    
    //get the injected service from component's fixture.debugElement
    locationService = fixture.debugElement.injector.get(LocationStructureService);
    
    mockLocation = 
      { locationCode :'D01',locationName:'Delhi',csoOwner:123,csoOwnerName:'Vikas'};
//Create a jasmine spy to spy on the add method
       spy = spyOn(locationService,'add').and.returnValue(Promise.resolve(mockLocation));
       component.addLocation(mockLocation);
       fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it("should accept input values", () => {
    //Query the input selectors
    de = fixture.debugElement.query(By.css("#locationCode"));
    let inputLocationCode = de.nativeElement;
    de = fixture.debugElement.query(By.css("#locationName"));
    let inputLocationName = de.nativeElement;
     de = fixture.debugElement.query(By.css("#csoOwnerID"));
     let inputCsoOwnerCode = de.nativeElement;
     de = fixture.debugElement.query(By.css("#csoOwnerName"));
     let inputCsoOwnerName = de.nativeElement;
     //Set the input element's value to mockPaste
     inputLocationCode.value = mockLocation.locationCode;
     inputLocationName.value = mockLocation.locationName;
     inputCsoOwnerCode  = mockLocation.csoOwner;
     inputCsoOwnerName.value = mockLocation.csoOwnerName;
     
    fixture.detectChanges();
      component.model = mockLocation;
     // component.addLocation(component.model);
      fixture.detectChanges();
     expect(inputLocationCode.value).toEqual(component.model.locationCode);
     expect(inputLocationName.value).toEqual(component.model.locationName);
     expect(inputCsoOwnerCode).toEqual(component.model.csoOwner);
     expect(inputCsoOwnerName.value).toEqual(component.model.csoOwnerName);
  });
  it("should submit the values", async() => {   
    component.model = mockLocation;
    component.addLocation(component.model);
     fixture.detectChanges();
     fixture.whenStable().then( () => {
         fixture.detectChanges();
         expect(spy.calls.any()).toBeTruthy();
     });
   });
   it('should have the submit button',async()=> {
     expect(element.innerHTML).toContain("submit");
     component.onSubmit();
     expect(component.submitted).toBe(true);
        
   })
  });