
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { createMenuMock } from '../../domain/models/mocks/menu-mock';
import { MenuComponent } from './menu.component';
import { IMenuGestionnaire } from '../../domain/ports/api/i-menu-gestionnaire';
import { ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';
import { of } from 'rxjs';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('MenuComponent', () => {
    let spectator: Spectator<MenuComponent>;
    const menuServiceStub: Partial<IMenuGestionnaire> = {}

    const menuMock = createMenuMock()
    const activatedRouteMock = {
        snapshot: {
            paramMap: {
                get: () => menuMock.id.toString(),
            },
        },
    }
    const elementRefMock = new ElementRef(document.createElement('div'))
    const createComponent = createComponentFactory({
        component: MenuComponent,
        providers: [
            {
                provide: 'IMenuGestionnaire',
                useValue: menuServiceStub
            }, {
                provide: ActivatedRoute,
                useValue: activatedRouteMock,

            }, {
                provide: ElementRef,
                useValue: elementRefMock,
            }]
    });

    beforeEach(() => {
        menuServiceStub.getMenu = jasmine.createSpy().and.returnValue(of(menuMock))
        spectator = createComponent();

    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should charge menu on init', () => {
        expect(menuServiceStub.getMenu).toHaveBeenCalledWith(menuMock.id);
        expect(spectator.component.menu).toEqual(menuMock)
        expect(spectator.component.souscriptions.length).toEqual(1)
    });

    it('should render app-header', () => {
        expect(spectator.query(HeaderComponent)).toBeTruthy();
        expect(spectator.query(HeaderComponent)?.nomEntreprise).toEqual(spectator.component.menu?.entreprise?.nom)
    });

    it('should render app-sidebar', () => {
        expect(spectator.query(SidebarComponent)).toBeTruthy();
        expect(spectator.query(SidebarComponent)?.sections).toEqual(spectator.component.menu?.sections)
    });

    it('should call scrollToSection when SidebarComponent onCliqueSection emit', () => {
        const ancreSectionMock = 'section-1'
        spyOn(spectator.component, 'scrollToSection')
        spectator.query(SidebarComponent)?.onCliqueSection.emit(ancreSectionMock)
        expect(spectator.component.scrollToSection).toHaveBeenCalledWith(ancreSectionMock);
    });

    it('should search and scroll to section element', () => {
        const ancreSectionMock = 'section-1'
        const elementSection = document.querySelector(`#${ancreSectionMock}`)!
        spyOn(document, 'querySelector').and.returnValue(elementSection)
        spyOn(elementSection, 'scrollIntoView')
        spectator.component.scrollToSection(ancreSectionMock)
        expect(document.querySelector).toHaveBeenCalledWith(`#${ancreSectionMock}`)
        expect(document.querySelector).toHaveBeenCalledWith(`#${ancreSectionMock}`)
    });
});
