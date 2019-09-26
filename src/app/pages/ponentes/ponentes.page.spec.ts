import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonentesPage } from './ponentes.page';

describe('PonentesPage', () => {
  let component: PonentesPage;
  let fixture: ComponentFixture<PonentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
