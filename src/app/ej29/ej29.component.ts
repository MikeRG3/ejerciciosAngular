import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej29',
  templateUrl: './ej29.component.html',
  styles: []
})
export class Ej29Component implements OnInit {
  
  caja:any;
  ocurrencia:any;
  constructor() { }

  ngOnInit() {
   this.ocurrencia= null;
  }

  enviar(){
    this.ocurrencia = this.caja;
    this.caja = "";
    
  }

}
