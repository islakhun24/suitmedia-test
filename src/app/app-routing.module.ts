import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './module/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  loadChildren: () =>
    import('./module/layout/layout.module').then(
      (module) => module.LayoutModule
    ),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
