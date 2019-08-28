import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMessageComponent } from './movie-message.component';

describe('MovieMessageComponent', () => {
  let component: MovieMessageComponent;
  let fixture: ComponentFixture<MovieMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
