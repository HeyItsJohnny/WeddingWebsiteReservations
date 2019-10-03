import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpGuestsPage } from './rsvp-guests.page';

describe('RsvpGuestsPage', () => {
  let component: RsvpGuestsPage;
  let fixture: ComponentFixture<RsvpGuestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpGuestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpGuestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
