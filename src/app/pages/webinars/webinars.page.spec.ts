import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsPage } from './webinars.page';

describe('WebinarsPage', () => {
  let component: WebinarsPage;
  let fixture: ComponentFixture<WebinarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
