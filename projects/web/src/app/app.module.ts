import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import {RouterModule, Routes} from '@angular/router';
import {MandalaFlowerSixModule} from "../../../octavia/dist/octavia";
import { AppComponent } from './app.component';
import {ShellComponent} from './shell/shell.component';
import {HeaderModule} from './shell/header/header.module';
import {FooterModule} from './shell/footer/footer.module';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HomepageComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HeaderModule,
    FooterModule,
    MandalaFlowerSixModule,
    LayoutModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
