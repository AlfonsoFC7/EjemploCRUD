import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Area } from '../models/area';
import { AreaForm } from '../interfaces/areaForm';
import { Observable,of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  public errorMessage: any;
  constructor(private http: HttpClient) { }

  cargarAreas():Observable<Area[]>{
    return this.http.get<Area[]>(`https://localhost:7094/api/Areas`);
  }
  cargarAreaId(id:number):Observable<any>{
    const url = `https://localhost:7094/api/Areas/${id}`;
    return this.http.get<any>(url);
  }
  crearArea(area:AreaForm){
    this.http.post(`https://localhost:7094/api/Areas`,{...area});
  }
  actualizarArea(id:number|null|undefined, area:AreaForm){
    const url = `https://localhost:7094/api/Areas/${ id }`;
    return this.http.put(url,{...area});
  }
  borrarArea(id:number){
    const url = `https://localhost:7094/api/Areas/${ id }`;
    return this.http.delete(url);
  }
}
