import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ButtonModule } from '../../../../../octavia/src/public-api'

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
  FooterComponent
],
})
export class FooterModule { }
