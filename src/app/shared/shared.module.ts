import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CompaniesComponent } from './companies/companies.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    CompaniesComponent,
    CarouselComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    CompaniesComponent,
    NavbarComponent
  ],
})
export class SharedModule { }
