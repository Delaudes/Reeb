import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { HeaderComponent } from "../shared/header/header.component";
import { ConnexionComponent } from "./connexion.component";

describe('ConnexionComponent', () => {
  let spectator: Spectator<ConnexionComponent>;
  const createComponent = createComponentFactory({
    component: ConnexionComponent,

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
});