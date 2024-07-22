import { HeaderComponent } from './header.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { createMenuMock } from '../../../domain/models/mocks/menu-mock';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
    let spectator: Spectator<HeaderComponent>;
    let routerStub: Partial<Router> = {}

    const createComponent = createComponentFactory({
        component: HeaderComponent,
        providers: [
            {
                provide: Router,
                useValue: routerStub
            }

        ]
    });

    beforeEach(() => {
        routerStub.navigate = jasmine.createSpy()
        spectator = createComponent();
        spectator.setInput('nomEntreprise', createMenuMock().entreprise!.nom);
        spectator.detectChanges();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render company name', () => {
        expect(spectator.query('.nom')).toHaveText(createMenuMock().entreprise!.nom);
    });

    it('should render "by Reeb"', () => {
        expect(spectator.query('.nous')).toHaveText('by Reeb');
    });

    it('should render Reeb before login', () => {
        spectator.setInput('nomEntreprise', undefined);
        spectator.detectChanges();
        expect(spectator.query('.nom')).toHaveText('Reeb');
        expect(spectator.query('.nous')).toHaveText('CHOOSE FAST');
    });

    it('should render SVGs', () => {
        expect(spectator.query(`img[alt="Bouton d'accueil"]`)).toBeTruthy();
        expect(spectator.query('img[alt="Bouton de connexion"]')).toBeTruthy();
    });

    it('should call navigate on click accueil', () => {
        spectator.click(`img[alt="Bouton d'accueil"]`)
        expect(routerStub.navigate).toHaveBeenCalledWith([''])
    });

    it('should call navigate on click connexion', () => {
        spectator.click(`img[alt="Bouton de connexion"]`)
        expect(routerStub.navigate).toHaveBeenCalledWith(['connexion'])
    });
});
