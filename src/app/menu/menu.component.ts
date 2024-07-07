
import { Component } from '@angular/core';
import { Menu } from '../domain/models/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menu?: Menu = {
    sections: [{
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
      titre: 'Plats'
    }, {
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
      titre: 'Plats'
    }]
  }
}

