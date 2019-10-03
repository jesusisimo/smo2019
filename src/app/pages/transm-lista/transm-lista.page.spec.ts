import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmListaPage } from './transm-lista.page';

describe('TransmListaPage', () => {
  let component: TransmListaPage;
  let fixture: ComponentFixture<TransmListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
