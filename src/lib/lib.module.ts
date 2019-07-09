import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OctaviaButtonComponent } from './button/button.component';



@NgModule({
  declarations: [OctaviaButtonComponent],
  exports: [
    OctaviaButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LibModule { }
