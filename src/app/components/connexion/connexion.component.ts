import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUtilisateurGestionnaire } from '../../domain/ports/api/i-utilisateur-gestionnaire';
import { Subscription } from 'rxjs';
import { UtilisateurStore } from '../../domain/stores/utilisateur.store';
import { IUtilisateurStore } from '../../domain/ports/spi/i-utilisateur-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit, OnDestroy {
  estNouveauClient = false
  email: string = ''
  motDePasse: string = ''
  confirmationMotDePasse: string = ''
  nomEtablissement: string = ''
  souscriptions: Subscription[] = []

  constructor(
    private router: Router,
    @Inject('IUtilisateurGestionnaire') private utilisateurService: IUtilisateurGestionnaire,
    @Inject('IUtilisateurStore') private utilisateurStore: IUtilisateurStore) { }

  ngOnInit(): void {
    if (this.utilisateurStore.estConnecte()) {
      this.router.navigate([`${this.utilisateurStore.getUtilisateur()!.idMenu}`])
    }
  }

  valider() {
    if (this.estNouveauClient) {
      this.souscriptions.push(this.utilisateurService.creerCompte(this.email, this.motDePasse, this.nomEtablissement).subscribe(utilisateur => {
        this.utilisateurStore.connecter(utilisateur)
        this.router.navigate([`${utilisateur.idMenu}`])
      }))
    } else {
      this.souscriptions.push(this.utilisateurService.seConnecter(this.email, this.motDePasse).subscribe(utilisateur => {
        this.utilisateurStore.connecter(utilisateur)
        this.router.navigate([`${utilisateur.idMenu}`])
      }))
    }
  }

  ngOnDestroy(): void {
    this.souscriptions.forEach(souscription => { souscription.unsubscribe() })
  }
}
