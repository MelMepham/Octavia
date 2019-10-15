import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OverlayModule } from '../overlay/overlay.module'
import { IconsModule } from "@octavia/lib/components/icons/icons.module";
import { ButtonModule } from '../button/button.module'

@NgModule({
  declarations: [
      ModalComponent
  ],
  imports: [
      CommonModule,
      OverlayModule,
      IconsModule,
      ButtonModule
  ],
  exports: [
      ModalComponent
  ]
})
export class ModalModule { }
