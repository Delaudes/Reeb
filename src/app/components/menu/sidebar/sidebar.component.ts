import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Section } from '../../../domain/models/section';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() sections?: Section[] = []
  @Output() onCliqueSection: EventEmitter<string> = new EventEmitter();

  scrollToSection(idSection: number) {
    this.onCliqueSection.emit(`section-${idSection}`)
  }
}
