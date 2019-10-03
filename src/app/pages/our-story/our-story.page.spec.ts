import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoryPage } from './our-story.page';

describe('OurStoryPage', () => {
  let component: OurStoryPage;
  let fixture: ComponentFixture<OurStoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurStoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurStoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
