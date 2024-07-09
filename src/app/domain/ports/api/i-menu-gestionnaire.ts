import { Observable } from "rxjs";
import { Menu } from "../../models/menu";

export interface IMenuGestionnaire {
    getMenu(id: number): Observable<Menu>
}