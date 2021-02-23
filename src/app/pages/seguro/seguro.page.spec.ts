import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroPage } from './seguro.page';

describe('SeguroPage', () => {
  let component: SeguroPage;
  let fixture: ComponentFixture<SeguroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
