import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpocomercialPage } from './expocomercial.page';

describe('ExpocomercialPage', () => {
  let component: ExpocomercialPage;
  let fixture: ComponentFixture<ExpocomercialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpocomercialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpocomercialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
