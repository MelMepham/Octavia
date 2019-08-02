import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MandalaFlowerSixComponent} from '../../../../octavia/src/lib/animations/mandala-flower-six/mandala-flower-six.component';
// import { MandalaFlowerSixComponent } from "../../../octavia/src/lib/animations/mandala-flower-six/mandala-flower-six.component";



@NgModule({
  declarations: [
    MandalaFlowerSixComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomepageModule { }
