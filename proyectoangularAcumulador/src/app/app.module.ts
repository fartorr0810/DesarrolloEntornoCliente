import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesencilloComponent } from './componentesencillo/componentesencillo.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ListalaumnosComponent } from './listalaumnos/listalaumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesencilloComponent,
    AlumnoComponent,
    ListalaumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
