import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Empleado } from '../../models/empleado';
import { Area } from 'src/app/models/area';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public EmpleadoForm = this.form.group({
    id_empleado: [0],
    nombre:['',Validators.required],
    correo:['',Validators.required],
    telefono:['',Validators.required],
    id_area:[0, Validators.required]
  });
  public Empleado: any;
  public Area:any;
  constructor(private AreaService: AreasService, private EmpleadoService: EmpleadosService, private router:Router, private form:FormBuilder ){}

ngOnInit(): void {
    this.getEmpleados();
    this.getArea();
}
getArea(){
  this.AreaService.cargarAreas().subscribe((Area:any)=>this.Area = Area);
}
getEmpleados(){
  this.EmpleadoService.cargarEmpleado().subscribe((Empleado:any) =>this.Empleado = Empleado);
}
getEmpleadosId(id:number){
  this.EmpleadoService.cargarEmpleadoId(id).subscribe((Empleado:any) =>this.EmpleadoForm.setValue(Empleado));
}
postEmpleado(){
  this.EmpleadoService.crearEmpleado(this.EmpleadoForm.value);
}
putEmpleado(){
  const {id_empleado}= this.EmpleadoForm.value;
  this.EmpleadoService.actualizarEmpleado(id_empleado, this.EmpleadoForm.value).subscribe();
}
deleteEmpleado(id:number){
  this.EmpleadoService.borrarEmpleado(id).subscribe();
}
}
