import { Component, Input } from '@angular/core';
import { Consommation } from '../../domain/models/consommation';

@Component({
  selector: 'app-consommation',
  standalone: true,
  imports: [],
  templateUrl: './consommation.component.html',
  styleUrl: './consommation.component.scss'
})
export class ConsommationComponent {
  @Input() consommation?: Consommation
}
