import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import {ShellComponent} from './shell/shell.component';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderModule} from './shell/header/header.module';
import { MandalaFlowerSixComponent } from "../../../octavia/src/lib/animations/mandala-flower-six/mandala-flower-six.component";


const routes: Routes = [{
    path: '',
    component: HomepageComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HomepageComponent,
    MandalaFlowerSixComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HeaderModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
