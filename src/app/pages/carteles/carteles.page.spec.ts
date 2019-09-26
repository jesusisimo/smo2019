import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelesPage } from './carteles.page';

describe('CartelesPage', () => {
  let component: CartelesPage;
  let fixture: ComponentFixture<CartelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartelesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
