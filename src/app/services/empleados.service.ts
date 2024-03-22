import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Empleado } from '../models/empleado';
import { EmpleadoForm } from '../interfaces/empleadoForm';
import { Area } from '../models/area';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  public errorMessage: any;
  constructor(private http:HttpClient) { }

  cargarEmpleado():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`https://localhost:7094/api/Empleados`);
  }
  cargarEmpleadoId(id:number):Observable<any>{
    const url = `https://localhost:7094/api/Empleados/${id}`;
    return this.http.get<any>(url);
  }
  crearEmpleado(value:EmpleadoForm){
    console.log(JSON.stringify({...value}))
    const url = `https://localhost:7094/api/Empleados`;
    this.http.post(url,JSON.stringify({...value}));
  }
  actualizarEmpleado(id:number|null|undefined, value:EmpleadoForm ){
    const url = `https://localhost:7094/api/Empleados/${ id }`;
    return this.http.put(url,JSON.stringify({...value}));
  }
  borrarEmpleado(id:number){
    const url = `https://localhost:7094/api/Empleados/${ id }`;
    return this.http.delete(url);
  }
}
