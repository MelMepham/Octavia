import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {LogoComponent} from "../../../assets/logo-svg/logo.component";
import {RouterModule} from '@angular/router';
import {ButtonModule} from 'octavia/src/lib/components/button/button.module';


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
    RouterModule,
    ButtonModule
  ]
})
export class HeaderModule { }
