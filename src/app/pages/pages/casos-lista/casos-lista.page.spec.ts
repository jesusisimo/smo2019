import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosListaPage } from './casos-lista.page';

describe('CasosListaPage', () => {
  let component: CasosListaPage;
  let fixture: ComponentFixture<CasosListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
