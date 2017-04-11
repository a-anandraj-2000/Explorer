/*
This is Main Page which will be mapped to Index.html using Main.js file which is configured in systemjs.config.js
 */


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import{AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);