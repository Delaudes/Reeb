import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AccueilComponent } from './accueil.component';
import { HeaderComponent } from '../shared/header/header.component';

describe('AccueilComponent', () => {
  let spectator: Spectator<AccueilComponent>;
  const createComponent = createComponentFactory({
    component: AccueilComponent,

  });

  beforeEach(() => {
    spectator = createComponent();

  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render app-header', () => {
    expect(spectator.query(HeaderComponent)).toBeTruthy();
    expect(spectator.query(HeaderComponent)?.nomEntreprise).toEqual(undefined)
  });

  it('should render general info', () => {
    expect(spectator.query('.general')).toHaveText('Avec Reeb, vous pouvez créer votre menu digital facilement pour un coût maitrisé.')
    expect(spectator.query('.general')).toHaveText('Pour cela rien de plus simple, suivez les étapes suivantes :')
  });

  it('should render SVGs', () => {
    expect(spectator.query(`img[src="assets/compte.svg"]`)).toBeTruthy();
    expect(spectator.query('img[src="assets/menu.svg"]')).toBeTruthy();
    expect(spectator.query(`img[src="assets/abonnement.svg"]`)).toBeTruthy();
    expect(spectator.query('img[src="assets/qr-code.svg"]')).toBeTruthy();
    expect(spectator.query('img[src="assets/merci.svg"]')).toBeTruthy();
  });

  it('should render etapes info', () => {
    expect(spectator.query('.etapes')).toHaveText('Créez votre compte')
    expect(spectator.query('.etapes')).toHaveText('Alimentez votre menu')
    expect(spectator.query('.etapes')).toHaveText('Abonnez-vous')
    expect(spectator.query('.etapes')).toHaveText('Commandez et collez vos QR codes')

    expect(spectator.query('.etapes')).toHaveText('En seulement 30 secondes, vous pouvez remplir le formulaire de création de compte : un mail et un mot de passe robuste suffisent.')
    expect(spectator.query('.etapes')).toHaveText(`Avec l'interface ergonomique de Reeb, il suffit de quelques minutes pour que votre menu soit réalisé, à vous de décider ce qu'il contient.`)
    expect(spectator.query('.etapes')).toHaveText(`Pour seulement 30€ par mois, votre menu est accessible en ligne. En plus, c'est sans engagement et le premier mois est gratuit.`)
    expect(spectator.query('.etapes')).toHaveText('On vous livre des QR codes plastifiés à 1€/unité à coller sur vos tables pour que vos clients accèdent rapidement à votre menu.')
  });

  it('should render remerciement info', () => {
    expect(spectator.query('.remerciement')).toHaveText('Vos clients vous remercieront')
  });
});
