import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { createMenuMock } from '../../../domain/models/mocks/menu-mock';
import { ConsommationComponent } from './consommation.component';
import { Consommation } from '../../../domain/models/consommation';

describe('ConsommationComponent', () => {
    let spectator: Spectator<ConsommationComponent>;
    const createComponent = createComponentFactory({
        component: ConsommationComponent,

    });

    beforeEach(() => {
        spectator = createComponent();

    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render consommation titre, description and prix', () => {
        const consommationMock: Consommation = createMenuMock().sections[0].consommations[0]
        spectator.setInput('consommation', consommationMock);
        spectator.detectChanges();

        const consommationContenu = spectator.query('.contenu');

        expect(consommationContenu).toHaveText(consommationMock.titre);
        expect(consommationContenu).toHaveText(consommationMock.description);
        expect(consommationContenu).toHaveText(`${consommationMock.prix}€`);
    });

    it('should render prix avec 2 chiffres après la virgule', () => {
        const consommationMock: Consommation = {
            titre: 'titre',
            description: 'consommateur',
            prix: 20
        }
        spectator.setInput('consommation', consommationMock);
        spectator.detectChanges();

        expect(spectator.query('.contenu')).toHaveText(`${consommationMock.prix.toFixed(2)}€`);
    });

});
