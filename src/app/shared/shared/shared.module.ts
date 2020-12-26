import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CompaniesComponent } from './companies/companies.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CompaniesComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    CompaniesComponent,
    NavbarComponent
  ],
})
export class SharedModule { }
