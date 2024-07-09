import { MENU_MOCK } from "../../../infra/dto/mocks/menu-mock";
import { Menu } from "../menu";

export function createMenuMock(): Menu {
    return new Menu(MENU_MOCK)
}