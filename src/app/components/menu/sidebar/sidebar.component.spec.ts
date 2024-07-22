import { createMenuMock } from '../../../domain/models/mocks/menu-mock';
import { Section } from '../../../domain/models/section';
import { SidebarComponent } from './sidebar.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('SidebarComponent', () => {
    let spectator: Spectator<SidebarComponent>;
    const createComponent = createComponentFactory({
        component: SidebarComponent,
    });

    const sectionsMock: Section[] = createMenuMock().sections
    beforeEach(() => {
        spectator = createComponent();
        spectator.setInput('sections', sectionsMock);
        spectator.detectChanges();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render section titles', () => {
        const sectionsTitre = spectator.queryAll('.section-titre');

        expect(sectionsTitre.length).toBe(sectionsMock.length);
        sectionsTitre.forEach(section => {
            const indexSection = sectionsTitre.indexOf(section)
            expect(sectionsTitre[indexSection]).toHaveText(sectionsMock[indexSection].titre);
        })
    });

    it('should emit onCliqueSection with correct section id when section is clicked', () => {
        spyOn(spectator.component.onCliqueSection, 'emit');
        const sectionsTitre = spectator.queryAll('.section-titre');

        sectionsTitre.forEach(section => {
            const indexSection = sectionsTitre.indexOf(section)
            spectator.click(sectionsTitre[indexSection]);
            expect(spectator.component.onCliqueSection.emit).toHaveBeenCalledWith(`section-${sectionsMock[indexSection].id}`);
        })
    });
});
