import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { MandalaFlowerSixModule } from "../../../octavia/dist/octavia";
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'src/app/homepage/homepage.module#HomepageModule'
},
  {
    path: 'about',
    loadChildren: 'src/app/about-me/about-me.module#AboutMeModule'
  }];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MandalaFlowerSixModule,
    LayoutModule,
    ShellModule

  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
