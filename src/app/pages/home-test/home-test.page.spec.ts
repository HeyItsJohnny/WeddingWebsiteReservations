import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestPage } from './home-test.page';

describe('HomeTestPage', () => {
  let component: HomeTestPage;
  let fixture: ComponentFixture<HomeTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
