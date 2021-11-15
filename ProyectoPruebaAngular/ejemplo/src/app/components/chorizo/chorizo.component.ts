import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chorizo',
  templateUrl: './chorizo.component.html',
  styleUrls: ['./chorizo.component.css']
})
export class ChorizoComponent implements OnInit {
    title: string ='EL CHORIZO PRIMO';
    mostrartexto(){
      let parrafo:any=document.createElement('p');
      parrafo.innerHTML=this.title;
      document.append(parrafo);
    }
  ngOnInit(): void {
  }

}
