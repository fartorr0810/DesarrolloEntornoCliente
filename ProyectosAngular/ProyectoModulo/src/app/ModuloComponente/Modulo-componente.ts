import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponente } from './contador-componente/contador-componente.component';
@NgModule({
  declarations: [
    ContadorComponente
  ],
  exports:[
    ContadorComponente
  ],
  imports: [
    CommonModule
  ]
})
export class ModuloContador {

}
