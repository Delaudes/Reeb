import { Component, Input } from '@angular/core';
import { Consommation } from '../../../domain/models/consommation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consommation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consommation.component.html',
  styleUrl: './consommation.component.scss'
})
export class ConsommationComponent {
  @Input() consommation?: Consommation
}
