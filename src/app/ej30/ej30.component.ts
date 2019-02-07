import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ej30',
  templateUrl: './ej30.component.html',
  styles: []
})
export class Ej30Component implements OnInit {

  @Input () ocurrencia;
  ocurrencias:Array<string>;
  colores:Array<any>;
  
  constructor() { }

  ngOnInit() {
    this.ocurrencias=[];
    this.colores = [];
  }
  
  getOcurrencias(){
    
    if ( this.ocurrencia != undefined){
      console.log("Longitud del array" , this.ocurrencias.length);
     this.ocurrencias.push(this.ocurrencia);

    }
    
    return this.ocurrencias;
  }

  encontrar(i){
    
    this.ocurrencias.forEach(e => {
      if (e == i){
        this.colores.push("green");
      }
    });
     this.colores.push("red") 

     return this.colores;
  }
}
