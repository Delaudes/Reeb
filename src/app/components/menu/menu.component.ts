
import { Component, ElementRef, Inject, OnDestroy, OnInit } from '@angular/core';
import { Menu } from '../../domain/models/menu';
import { CommonModule } from '@angular/common';
import { ConsommationComponent } from '../consommation/consommation.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { IMenuGestionnaire } from '../../domain/ports/api/i-menu-gestionnaire';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private elementRef: ElementRef, @Inject('IMenuGestionnaire') private menuService: IMenuGestionnaire) { }
  async ngOnInit(): Promise<void> {
    const idMenu: string | null = this.activatedRoute.snapshot.paramMap.get('id')
    if (idMenu) {
      this.souscriptions.push(this.menuService.getMenu(+idMenu).subscribe((menu) => {
        this.menu = menu
      }))
    }
  }

  scrollToSection(ancreSection: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${ancreSection}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    this.souscriptions.forEach(souscription => souscription.unsubscribe())
  }
}

