import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentcllocationComponent } from './currentcllocation.component';

describe('CurrentcllocationComponent', () => {
  let component: CurrentcllocationComponent;
  let fixture: ComponentFixture<CurrentcllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentcllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentcllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
