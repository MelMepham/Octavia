import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MandalaFlowerSixModule } from 'octavia/src/lib/animations/public-api';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MandalaFlowerSixModule,
    RouterModule.forChild([{
      path: '',
      component: HomepageComponent
    }]),
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
