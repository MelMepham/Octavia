import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../../../../../octavia/src/public-api'



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class HeaderModule { }
