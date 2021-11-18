import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from '../alumno/alumno.component';
import { ListalaumnosComponent } from '../listalaumnos/listalaumnos.component';



@NgModule({
  declarations: [
      AlumnoComponent,
      ListalaumnosComponent
  ],
  exports:[
    AlumnoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlumnoModuloModule { }
