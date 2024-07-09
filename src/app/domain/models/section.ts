import { SectionDto } from "../../infra/dto/section"
import { Consommation } from "./consommation"
import { SousSection } from "./sous-section"

export class Section {
    readonly sousSections: SousSection[] = []
    readonly consommations: Consommation[] = []
    readonly titre: string = 'Titre section'
    readonly id: number = 0

    constructor(sectionDto: SectionDto) {
        sectionDto.sousSections.forEach(sousSectionDto => {
            this.sousSections.push(new SousSection(sousSectionDto))
        })
        sectionDto.consommations.forEach(consommationDto => {
            this.consommations.push(new Consommation(consommationDto))
        })
        this.titre = sectionDto.titre
        this.id = sectionDto.id
    }
}

