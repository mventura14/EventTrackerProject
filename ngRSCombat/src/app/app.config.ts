import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientJsonpModule, HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(HttpClientJsonpModule)
  ]
};
