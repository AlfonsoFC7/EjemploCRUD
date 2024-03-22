import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Area } from 'src/app/models/area';
import { AreasService } from 'src/app/services/areas.service';
@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  public AreaForm = this.fa.group({
    id_area:[0],
    descripcion:['',Validators.required]
  });
  public Area:any;
  constructor(private AreaService: AreasService, private router:Router, private fa:FormBuilder){}

  ngOnInit(): void {
    this.getArea();
  }

  getArea(){
    this.AreaService.cargarAreas().subscribe((Area:any)=>this.Area = Area);
  }
  getAreaId(id:number){
    this.AreaService.cargarAreaId(id).subscribe((area:any)=>this.AreaForm.setValue(area));
  }
  postArea(){
    this.AreaService.crearArea(this.AreaForm.value);
  }
  putArea(){
    const {id_area} = this.AreaForm.value;
    this.AreaService.actualizarArea(id_area, this.AreaForm.value).subscribe();
  }
  deleteArea(id:number){
    this.AreaService.borrarArea(id).subscribe();
  }
}
