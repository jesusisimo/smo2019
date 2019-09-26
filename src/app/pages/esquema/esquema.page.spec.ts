import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquemaPage } from './esquema.page';

describe('EsquemaPage', () => {
  let component: EsquemaPage;
  let fixture: ComponentFixture<EsquemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsquemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
