import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalHeaderDirective } from './modal-header.directive'
import { OverlayModule } from '../overlay/overlay.module'
import { IconsModule } from "@octavia/lib/components/icons/icons.module";
import { ButtonModule } from '../button/button.module'

@NgModule({
  declarations: [
      ModalComponent,
      ModalHeaderDirective
  ],
  imports: [
      CommonModule,
      OverlayModule,
      IconsModule,
      ButtonModule
  ],
  exports: [
      ModalComponent,
      ModalHeaderDirective
  ]
})
export class ModalModule { }
