import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../../../../../octavia/src/public-api'
import {LogoComponent} from "../../../assets/logo-svg/logo.component";
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ]
})
export class HeaderModule { }
