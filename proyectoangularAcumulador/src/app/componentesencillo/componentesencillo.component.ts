import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-componentesencillo',
  templateUrl: './componentesencillo.component.html',
  styleUrls: ['./componentesencillo.component.css']
})
export class ComponentesencilloComponent implements OnInit {
 now: Date;
  constructor() {
     this.now=new Date();
   }

  ngOnInit(): void {
    this.now = new Date();

    setInterval(() => {

      this.now = new Date();

    }, 1000);
  }

}
