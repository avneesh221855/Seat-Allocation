import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSeatsComponent } from './manage-seats.component';

describe('ManageSeatsComponent', () => {
  let component: ManageSeatsComponent;
  let fixture: ComponentFixture<ManageSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
