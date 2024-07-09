import { SousSectionDto } from "../../infra/dto/sous-section"
import { Consommation } from "./consommation"

export class SousSection {
    readonly consommations: Consommation[] = []
    readonly titre: string = 'Titre sous-section'

    constructor(sousSectionDto: SousSectionDto) {

        sousSectionDto.consommations.forEach(consommationDto => {
            this.consommations.push(new Consommation(consommationDto))
        })
        this.titre = sousSectionDto.titre
    }
}