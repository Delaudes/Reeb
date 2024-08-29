
import { Component, ElementRef, Inject, OnDestroy, OnInit } from '@angular/core';
import { Menu } from '../../domain/models/menu';
import { CommonModule } from '@angular/common';
import { ConsommationComponent } from './consommation/consommation.component';
import { HeaderComponent } from '../shared/header/header.component';
import { IMenuGestionnaire } from '../../domain/ports/api/i-menu-gestionnaire';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IUtilisateurStore } from '../../domain/ports/spi/i-utilisateur-store';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ConsommationComponent, HeaderComponent, SidebarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, OnDestroy {
  menu?: Menu
  souscriptions: Subscription[] = []
  idMenu: string | null = null

  constructor(
    protected activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject('IMenuGestionnaire') private menuService: IMenuGestionnaire,
    @Inject('IUtilisateurStore') protected utilisateurStore: IUtilisateurStore) { }

  async ngOnInit(): Promise<void> {
    this.idMenu = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.idMenu) {
      this.souscriptions.push(this.menuService.getMenu(+this.idMenu).subscribe((menu) => {
        this.menu = menu
      }))
    } else {
      this.router.navigate(['accueil'])
    }
  }

  scrollToSection(ancreSection: string) {
    const element = document.querySelector(`#${ancreSection}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    this.souscriptions.forEach(souscription => { souscription.unsubscribe() })
  }

}

