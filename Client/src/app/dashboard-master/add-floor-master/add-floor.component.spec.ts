import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AddFloorComponent } from './add-floor.component';
import { AddFloorService } from '../../shared/services/add-floor.service';
import { AddBuildingService } from '../../shared/services/add-building.service';
import { LocationStructureService } from '../../shared/services/location-structure.service';
describe('AddFloorComponent', () => {
    let component: AddFloorComponent;
    let fixture: ComponentFixture<AddFloorComponent>;
    let floorService: AddFloorService;
    let buildService: AddBuildingService;
    let locationService: LocationStructureService;
    let spy: jasmine.Spy;
    let spy2: jasmine.Spy;
    let spy3: jasmine.Spy;
    let de: DebugElement;
    let el: HTMLElement;
    const mockBuilding =
        [{ locationCode: 'D01', buildingCode: 'DB01', buildingName: 'Tapasya' }];
    const data = [
        { locationCode: 'D01', locationName: 'Delhi', csoOwner: 123, csoOwnerName: 'Vikas' },
        { locationCode: 'D02', locationName: 'pune', csoOwner: 123, csoOwnerName: 'Vikas' },
        { locationCode: 'D03', locationName: 'punjab', csoOwner: 123, csoOwnerName: 'Vikas' }
    ];
    const floorMock = [
        {  locationCode: 'D01', buildingCode: 'DB01', floorName: '1st Floor', openVacantSeats: 23, abvSeats: 40 },
        {  locationCode: 'D02', buildingCode: 'GNB01', floorName: '2nd Floor', openVacantSeats: 33, abvSeats: 50 }
    ];
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpModule],
            declarations: [AddFloorComponent],
            providers: [AddBuildingService, AddFloorService, LocationStructureService, { provide: Router }]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AddFloorComponent);
        component = fixture.componentInstance;
        locationService = fixture.debugElement.injector.get(LocationStructureService);
        buildService = fixture.debugElement.injector.get(AddBuildingService);
        floorService = fixture.debugElement.injector.get(AddFloorService);
        de = fixture.debugElement.query(By.css('.floor-form'));
        el = de.nativeElement;
        spy = spyOn(locationService, 'getLocationName').and.returnValue(Observable.of(data))
        fixture.detectChanges();
    });
    it('should update first form element with location value', async(() => {
        fixture.detectChanges();
        expect(component.locations).toEqual(data);
        de = fixture.debugElement.query(By.css('#locationName'));
        el = de.nativeElement;
        fixture.detectChanges();        // update view with quote
        expect(el[2].value).toBe("D03");
    }));
    it('should update second form element with building value', async(() => {
        spy = spyOn(buildService, "getBuildingName").and.returnValue(Observable.of(mockBuilding));
        component.select();
        fixture.detectChanges();
        expect(component.buildings).toEqual(mockBuilding);
        de = fixture.debugElement.query(By.css('#buildingName'));
        el = de.nativeElement;
       // de1 = fixture.debugElement.query(By.css('#locationName'));
        //de1.triggerEventHandler("change",null);
        fixture.detectChanges();        // update view with quote
        expect(el[0].value).toBe("DB01");
    }));
    it('should update third form element with form value', async(() => {
        spy = spyOn(floorService, "addFloor").and.returnValue(Observable.of(floorMock));
        component.addFloor();
        // de = fixture.debugElement.query(By.css('#floorName'));
        // el = de.nativeElement;
        // fixture.detectChanges();
        fixture.detectChanges();        // update view with quote
        expect(component.floorsData).toEqual(floorMock);
        //expect(spy.calls.any()).toBeTruthy;
    }));
    it('should have the submit button', async () => {
        expect(el.innerHTML).toContain('submit');
        component.onSubmit();
        expect(component.submitted).toBe(true);
    })
});