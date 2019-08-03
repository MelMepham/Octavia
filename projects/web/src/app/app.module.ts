import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import {ShellComponent} from './shell/shell.component';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderModule} from './shell/header/header.module';
import {MandalaFlowerSixModule} from "../../../octavia/dist/octavia";


const routes: Routes = [{
    path: '',
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
    MandalaFlowerSixModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
