import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MenuServiceMock } from './infra/adapters/menu/mock/menu-mock.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: 'IMenuGestionnaire', useClass: MenuServiceMock }]
};
