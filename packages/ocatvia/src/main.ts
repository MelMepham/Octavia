import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { OcatviaModule } from './lib/ocatvia.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(OcatviaModule)
    .catch(err => console.error(err));
