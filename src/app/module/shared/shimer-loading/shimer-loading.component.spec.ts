import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimerLoadingComponent } from './shimer-loading.component';

describe('ShimerLoadingComponent', () => {
  let component: ShimerLoadingComponent;
  let fixture: ComponentFixture<ShimerLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShimerLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
