import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLandingPageComponent } from './detail-landing-page.component';

describe('DetailLandingPageComponent', () => {
  let component: DetailLandingPageComponent;
  let fixture: ComponentFixture<DetailLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
