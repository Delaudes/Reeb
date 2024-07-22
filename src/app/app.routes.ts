import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: ':id', component: MenuComponent },
    { path: '**', redirectTo: '' },
];