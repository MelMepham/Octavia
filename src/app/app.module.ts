import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OcatviaModule } from "../../ocatvia/ocatvia.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OcatviaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
