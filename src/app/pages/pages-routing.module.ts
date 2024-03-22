import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import {EmpleadosComponent} from './empleados/empleados.component';

const routes: Routes = [
  {path: 'areas', component: AreasComponent},
  { path: 'empleados', component: EmpleadosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }