
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Menu } from '../../domain/models/menu';
import { CommonModule } from '@angular/common';
import { ConsommationComponent } from '../consommation/consommation.component';
import { HeaderComponent } from '../header/header.component';
import { FiltresComponent } from '../filtres/filtres.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ConsommationComponent, HeaderComponent, FiltresComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private elementRef: ElementRef) { }

  menu?: Menu = {
    entreprise: { nom: "Chalet La Pricaz" },
    sections: [{
      id: 0,
      sousSections: [{
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }, {
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }], consommations: [{
        titre: 'Le burger', description: 'Pain brioché de boulanger, steak 150g, cheddar, salade, tomate, oignons, sause BBQ, servit avec frites et salade', prix: '21.95€'
      }, {
        titre: 'La pizza', description: 'Sauce tomate maison, mozzarella, champignons, jambon cuit, basilic', prix: '14.95€'
      }],
      titre: 'Nos Entrées'
    }, {
      id: 1,
      sousSections: [{
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }, {
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }, {
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }, {
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }, {
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }, {
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }], consommations: [{
        titre: 'Le burger', description: 'Pain brioché de boulanger, steak 150g, cheddar, salade, tomate, oignons, sause BBQ, servit avec frites et salade', prix: '21.95€'
      }, {
        titre: 'La pizza', description: 'Sauce tomate maison, mozzarella, champignons, jambon cuit, basilic', prix: '14.95€'
      }],
      titre: 'Nos Plats'
    }, {
      id: 2,
      sousSections: [{
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }], consommations: [{
        titre: 'Le burger', description: 'Pain brioché de boulanger, steak 150g, cheddar, salade, tomate, oignons, sause BBQ, servit avec frites et salade', prix: '21.95€'
      }, {
        titre: 'La pizza', description: 'Sauce tomate maison, mozzarella, champignons, jambon cuit, basilic', prix: '14.95€'
      }],
      titre: 'Nos Desserts'
    }, {
      id: 3,
      sousSections: [{
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }], consommations: [{
        titre: 'Le burger', description: 'Pain brioché de boulanger, steak 150g, cheddar, salade, tomate, oignons, sause BBQ, servit avec frites et salade', prix: '21.95€'
      }, {
        titre: 'La pizza', description: 'Sauce tomate maison, mozzarella, champignons, jambon cuit, basilic', prix: '14.95€'
      }],
      titre: 'Nos Boissons'
    }, {
      id: 4,
      sousSections: [{
        consommations: [{
          titre: 'César', description: 'Salade, tomates cerises, croutons, parmesan, poulet frit, sauce César', prix: '12.95€'
        }, {
          titre: 'Caprese', description: "Mozzarella, tomate, basilic, huile d'olive", prix: '11.95€'
        }], titre: 'Salades'
      }], consommations: [{
        titre: 'Le burger', description: 'Pain brioché de boulanger, steak 150g, cheddar, salade, tomate, oignons, sause BBQ, servit avec frites et salade', prix: '21.95€'
      }, {
        titre: 'La pizza', description: 'Sauce tomate maison, mozzarella, champignons, jambon cuit, basilic', prix: '14.95€'
      }],
      titre: 'Nos Digestifs'
    }]
  }

  scrollToSection(nomSection: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${nomSection}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

