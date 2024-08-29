import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUtilisateurStore } from '../../../domain/ports/spi/i-utilisateur-store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() nomEntreprise?: string

  constructor(
    protected router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject('IUtilisateurStore') protected utilisateurStore: IUtilisateurStore) { }

  seDeconnecter() {
    this.utilisateurStore.deconnecter()
    this.router.navigate([''])
  }

  peutEditer(): boolean {
    const idMenu: string | null = this.activatedRoute.snapshot.paramMap.get('id')
    if (idMenu) {
      return this.utilisateurStore.peutEditer(+idMenu)
    }
    return false
  }
}
