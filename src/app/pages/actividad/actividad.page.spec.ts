import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadPage } from './actividad.page';

describe('ActividadPage', () => {
  let component: ActividadPage;
  let fixture: ComponentFixture<ActividadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
