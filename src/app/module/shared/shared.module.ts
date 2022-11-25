import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardItemComponent } from './card-item/card-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipes/date.pipe';
import { ShimerLoadingComponent } from './shimer-loading/shimer-loading.component';
import { ImagesLoadDirective } from './directives/image-loader.directive';
import { ScrollTrackerDirective } from './directives/scroll.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FilterComponent,
    PaginationComponent,
    CardItemComponent,
    DateFormatPipe,
    ShimerLoadingComponent,
    ImagesLoadDirective,
    ScrollTrackerDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule

  ],
  exports: [
    NavbarComponent,
    FilterComponent,
    PaginationComponent,
    CardItemComponent,
    ReactiveFormsModule,
    FormsModule,
    DateFormatPipe,
    RouterModule,
    ShimerLoadingComponent,
    ImagesLoadDirective,
    ScrollTrackerDirective
  ]
})
export class SharedModule { }
