import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  nombre:string="";
  edad:number=0;

  constructor() {
    this.nombre="Fran";
    this.edad=0;
  }

  get nombreMays(): string {
    return this.nombre;
  }
  cambiarnombre(nombre:string){
    this.nombre="Pepe";
  }
  ngOnInit(): void {
  }

}
