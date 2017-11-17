import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import {Router} from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import{FormsModule}from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpModule} from '@angular/http' ;
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
class RouterStub {
  navigate(url: string) { return url; }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule,RouterTestingModule, BrowserAnimationsModule],
      declarations: [ LoginComponent ],
      providers: [
        
        { provide: Router,      useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });




  it('should tell ROUTER to navigate when user clicked',
  inject([Router], (router: Router) => { // ...

  const spy = spyOn(router, 'navigate');
  component.name="user";
  component.pass="123";
  de = fixture.debugElement.query(By.css('.fm'));
  el = de.nativeElement;

  el.click();
  fixture.detectChanges();
  //heroClick(); // trigger click on first inner <div class="hero">

  // args passed to router.navigateByUrl()

  const navArgs = spy.calls.first().args[0];
  console.log("the value of nav args",navArgs);
  expect('/app-sidenav').toContain(navArgs);

  // expecting to navigate to id of the component's first hero
 // const id = component.heroes[0].id;
  //expect(navArgs).toBe('/heroes/' + id,
   // 'should nav to HeroDetail for first hero');
}));


it('should tell ROUTER to navigate when authority clicked',
inject([Router], (router: Router) => { // ...

const spy = spyOn(router, 'navigate');
component.name="authority";
component.pass="123";
de = fixture.debugElement.query(By.css('.fm'));
el = de.nativeElement;

el.click();
fixture.detectChanges();
//heroClick(); // trigger click on first inner <div class="hero">

// args passed to router.navigateByUrl()

const navArgs = spy.calls.first().args[0];
console.log("the value of nav args",navArgs);
expect('/app-dashboard-authority').toContain(navArgs);

// expecting to navigate to id of the component's first hero
// const id = component.heroes[0].id;
//expect(navArgs).toBe('/heroes/' + id,
 // 'should nav to HeroDetail for first hero');
}));




it('should tell ROUTER to navigate when cso clicked',
inject([Router], (router: Router) => { // ...

const spy = spyOn(router, 'navigate');
component.name="cso";
component.pass="123";
de = fixture.debugElement.query(By.css('.fm'));
el = de.nativeElement;

el.click();
fixture.detectChanges();
//heroClick(); // trigger click on first inner <div class="hero">

// args passed to router.navigateByUrl()

const navArgs = spy.calls.first().args[0];
console.log("the value of nav args",navArgs);
expect('/app-dashboard-cso').toContain(navArgs);

// expecting to navigate to id of the component's first hero
// const id = component.heroes[0].id;
//expect(navArgs).toBe('/heroes/' + id,
 // 'should nav to HeroDetail for first hero');
}));

it('should tell ROUTER to navigate when master clicked',
inject([Router], (router: Router) => { // ...

const spy = spyOn(router, 'navigate');
component.name="master";
component.pass="123";
de = fixture.debugElement.query(By.css('.fm'));
el = de.nativeElement;

el.click();
fixture.detectChanges();
//heroClick(); // trigger click on first inner <div class="hero">

// args passed to router.navigateByUrl()

const navArgs = spy.calls.first().args[0];
console.log("the value of nav args",navArgs);
expect('/app-dashboard-master').toContain(navArgs);

// expecting to navigate to id of the component's first hero
// const id = component.heroes[0].id;
//expect(navArgs).toBe('/heroes/' + id,
 // 'should nav to HeroDetail for first hero');
}));

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
