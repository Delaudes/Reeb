import { Section } from "./section";
import { Entreprise } from "./entreprise";
import { MenuDto } from "../../infra/dto/menu";

export class Menu {
    readonly id: number = 0
    readonly sections: Section[] = []
    readonly entreprise?: Entreprise

    constructor(menuDto: MenuDto) {
        this.id = menuDto.id
        menuDto.sections.forEach(sectionDto => {
            this.sections.push(new Section(sectionDto))
        })
        this.entreprise = new Entreprise(menuDto.entreprise)
    }
}