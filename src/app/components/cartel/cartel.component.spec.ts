import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelComponent } from './cartel.component';

describe('CartelComponent', () => {
  let component: CartelComponent;
  let fixture: ComponentFixture<CartelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartelComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
