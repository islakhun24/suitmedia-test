/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SamplePageComponent } from './sample-page.component';

describe('SamplePageComponent', () => {
  let component: SamplePageComponent;
  let fixture: ComponentFixture<SamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
