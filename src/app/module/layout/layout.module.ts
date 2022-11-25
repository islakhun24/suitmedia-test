import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  declarations: [LayoutComponent, LandingPageComponent]
})
export class LayoutModule { }
