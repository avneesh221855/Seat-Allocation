import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAllocationComponent } from './current-allocation.component';

describe('CurrentAllocationComponent', () => {
  let component: CurrentAllocationComponent;
  let fixture: ComponentFixture<CurrentAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
