import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { Ej29Component } from './ej29/ej29.component';
import { Ej29hijoComponent } from './ej29hijo/ej29hijo.component';
import { Ej30Component } from './ej30/ej30.component';

@NgModule({
  declarations: [
    AppComponent,
    Ej29Component,
    Ej29hijoComponent,
    Ej30Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
