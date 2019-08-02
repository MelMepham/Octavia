import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import {HomepageComponent} from '../homepage/homepage.component';


@NgModule({
  declarations: [
    ShellComponent,
    HomepageComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ShellModule { }
