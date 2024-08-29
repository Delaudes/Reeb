import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MenuServiceMock } from './infra/adapters/menu/mock/menu-mock.service';
import { UtilisateurServiceMock } from './infra/adapters/utilisateur/mock/utilisateur-mock.service';
import { UtilisateurStore } from './domain/stores/utilisateur.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: 'IMenuGestionnaire',
      useClass: MenuServiceMock
    },
    {
      provide: 'IUtilisateurGestionnaire',
      useClass: UtilisateurServiceMock
    },
    {
      provide: 'IUtilisateurStore',
      useClass: UtilisateurStore
    }
  ]
};
