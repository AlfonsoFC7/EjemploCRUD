import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreasComponent } from './areas/areas.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AreasComponent,
    EmpleadosComponent,
    PagesComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    HttpClientModule
  ]
})
export class PagesModule { }
