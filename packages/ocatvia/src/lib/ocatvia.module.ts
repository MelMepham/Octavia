import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { OctaviaButtonComponent } from './button/button.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    OctaviaButtonComponent
  ],
  entryComponents: [
    OctaviaButtonComponent
  ]
})
export class OcatviaModule implements DoBootstrap {

  constructor(
      private _injector: Injector
  ) {
  }

  public ngDoBootstrap(): void {
    const el = createCustomElement(OctaviaButtonComponent, { injector: this._injector });
    customElements.define('oct-button', el);
  }
}
