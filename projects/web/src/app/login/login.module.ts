import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, ModalModule } from 'octavia/src/public-api'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    ModalModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    }]),
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
