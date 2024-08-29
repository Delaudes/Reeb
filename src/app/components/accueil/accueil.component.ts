import { Component, Inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IUtilisateurStore } from '../../domain/ports/spi/i-utilisateur-store';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject('IUtilisateurStore') private utilisateurStore: IUtilisateurStore) { }

  ngOnInit(): void {
    if (this.utilisateurStore.estConnecte()) {
      this.router.navigate([`${this.utilisateurStore.getUtilisateur()!.idMenu}`])
    }
  }
}

