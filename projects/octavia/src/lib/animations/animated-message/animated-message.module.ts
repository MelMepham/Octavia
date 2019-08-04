import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedMessageComponent } from './animated-message.component';



@NgModule({
  declarations: [
      AnimatedMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      AnimatedMessageComponent
  ]
})
export class AnimatedMessageModule { }
