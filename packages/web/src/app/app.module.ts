// import { OcatviaButtonModule } from '../../../ocatvia/src/lib/button/button.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OctaviaButtonComponent } from 'octavia/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    OctaviaButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
