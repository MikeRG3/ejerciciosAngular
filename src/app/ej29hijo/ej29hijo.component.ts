import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ej29hijo',
  templateUrl: './ej29hijo.component.html',
  styles: []
})
export class Ej29hijoComponent implements OnInit {

  @Input () valor:any;

  lista:Array<any>;
 

  constructor() { }

  ngOnInit() {
    this.lista=["Hola", 23, "Miguel","Adios", 2, 5];
     this.valor = 0;
  }

  encontrado(){
    let enc ="No encontrado";
    this.lista.forEach(e => {
      if (e == this.valor){
        console.log("Funcion que busca si la palabra está en el array", this.valor, e);
        enc = "Encontrado";
        
      }
    });
   
    return enc;
  }

}
