import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from '../../domain/models/section';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtres.component.html',
  styleUrl: './filtres.component.scss'
})
export class FiltresComponent {


  @Input() sections?: Section[] = []
  @Output() onCliqueSection: EventEmitter<string> = new EventEmitter();

  scrollToSection(idSection: number) {
    this.onCliqueSection.emit(`section-${idSection}`)
  }
}
