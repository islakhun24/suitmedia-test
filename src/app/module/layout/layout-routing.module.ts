import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { DetailLandingPageComponent } from '../detail-landing-page/detail-landing-page.component';
import { SamplePageComponent } from '../sample-page/sample-page.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'landing-page/detail-page',
    component: DetailLandingPageComponent
  },
  {
    path: '**',
    component: SamplePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
