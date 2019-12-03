import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesscodePage } from './accesscode.page';

describe('AccesscodePage', () => {
  let component: AccesscodePage;
  let fixture: ComponentFixture<AccesscodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesscodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesscodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
