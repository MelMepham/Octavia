import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { CvComponent } from './cv/cv.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { BannerModule } from '../../../../octavia/src/public-api'

// import {BannerComponent} from '../../../../../animated-message/animated-message.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ExhibitionsComponent,
    ContactComponent,
    CvComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([{
      path: '',
      component: AboutMeComponent
    }]),
    BannerModule

  ],
  exports: [
    AboutMeComponent
  ]
})
export class AboutMeModule { }
