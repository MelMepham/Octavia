import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonComponent } from '../../../octavia/src/lib/components/public-api'
import { MandalaFlowerSixComponent } from "../../../octavia/src/lib/animations/mandala-flower-six/mandala-flower-six.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MandalaFlowerSixComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
