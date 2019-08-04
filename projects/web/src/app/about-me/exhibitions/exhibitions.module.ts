import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionsComponent } from './exhibitions.component';



@NgModule({
  declarations: [
    ExhibitionsComponent
  ],
  exports: [
    ExhibitionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExhibitionsModule { }
