import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ]
})
export class ShellModule { }
