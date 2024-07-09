import { Observable, of } from "rxjs";
import { Menu } from "../../../../domain/models/menu";
import { IMenuGestionnaire } from "../../../../domain/ports/api/i-menu-gestionnaire";
import { createMenuMock } from "../../../../domain/models/mocks/menu-mock";

export class MenuServiceMock implements IMenuGestionnaire {
    getMenu(id: number): Observable<Menu> {
        return of(createMenuMock())
    }
}