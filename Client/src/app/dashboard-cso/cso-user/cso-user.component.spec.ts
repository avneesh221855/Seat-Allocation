import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsoUserComponent } from './cso-user.component';

describe('CsoUserComponent', () => {
  let component: CsoUserComponent;
  let fixture: ComponentFixture<CsoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
