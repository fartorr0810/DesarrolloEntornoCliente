import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador-componente.component.html',
  styleUrls: ['./contador-componente.component.css']
})
export class ContadorComponente {
    titulo:string="Contador"
    contador:number=0;
    base:number=0;
    constructor(){
      this.contador=0;
      this.base=0;
    }
    sumarcontador(base:number){
      this.contador=this.contador+this.base;
    }
    restarcontador(base:number){
      this.contador=this.contador-this.base;
    }
    restarbase(base:number){
      this.base=this.base-base;
    }
    sumarbase(base:number){
      this.base=this.base+base;
    }

    resetear(){
    this.contador=0;
    }

}

