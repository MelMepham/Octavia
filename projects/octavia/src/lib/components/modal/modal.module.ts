import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OverlayModule } from '../overlay/overlay.module'


@NgModule({
  declarations: [
      ModalComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
