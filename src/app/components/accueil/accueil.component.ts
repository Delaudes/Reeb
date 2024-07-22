import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  entrepriseConnectee = false
}
