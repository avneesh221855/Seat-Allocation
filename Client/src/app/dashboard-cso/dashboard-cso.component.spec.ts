import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCSOComponent } from './dashboard-cso.component';

describe('DashboardCSOComponent', () => {
  let component: DashboardCSOComponent;
  let fixture: ComponentFixture<DashboardCSOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCSOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
