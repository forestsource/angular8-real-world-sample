import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavimenuComponent } from './navimenu.component';

describe('NavimenuComponent', () => {
  let component: NavimenuComponent;
  let fixture: ComponentFixture<NavimenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavimenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
