import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';



@NgModule({
  declarations: [
    CvComponent
  ],
  exports: [
    CvComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class CvModule { }
