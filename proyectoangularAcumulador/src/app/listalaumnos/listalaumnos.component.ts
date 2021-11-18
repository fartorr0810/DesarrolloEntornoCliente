import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listalaumnos',
  templateUrl: './listalaumnos.component.html',
  styleUrls: ['./listalaumnos.component.css']
})
export class ListalaumnosComponent implements OnInit {
  lsitaalumnos:string[]=["Fran","Marta","Pepe","Josefa"];
  aprobados:string[]=[];
  eliminado:string="Eliminado";
  constructor() { }

  ngOnInit(): void {
  }
  borrarelemento():void{
    this.eliminado=this.lsitaalumnos[this.lsitaalumnos.length-1];
    this.aprobados.push(this.lsitaalumnos[this.lsitaalumnos.length-1]);
    this.lsitaalumnos.pop();
  }
  addelemento():void{
    this.eliminado=this.lsitaalumnos[this.lsitaalumnos.length-1];
    this.lsitaalumnos.push(this.lsitaalumnos[this.lsitaalumnos.length-1]);
    this.aprobados.pop();
  }

  get getEliminado() : string {
    return this.eliminado;
  }

}
