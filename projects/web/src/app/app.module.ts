import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { CanActivateWhenUserIsNotLoggedIn } from '../services/auth-guard.service';


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
  },
  {
    path: 'login',
    loadChildren: 'src/app/login/login.module#LoginModule',
    canActivate: [
      CanActivateWhenUserIsNotLoggedIn
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    ShellModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanActivateWhenUserIsNotLoggedIn
  ],
  bootstrap: [
    AppComponent
   ]
})
export class AppModule { }
