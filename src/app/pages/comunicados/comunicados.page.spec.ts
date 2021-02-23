import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicadosPage } from './comunicados.page';

describe('ComunicadosPage', () => {
  let component: ComunicadosPage;
  let fixture: ComponentFixture<ComunicadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
