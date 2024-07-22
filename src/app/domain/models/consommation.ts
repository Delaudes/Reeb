import { ConsommationDto } from "../../infra/dto/consommation"

export class Consommation {
    readonly titre: string = 'Titre consommation'
    readonly description: string = 'Description'
    readonly prix: number = 0.00

    constructor(consommationDto: ConsommationDto) {
        this.titre = consommationDto.titre
        this.description = consommationDto.description
        this.prix = consommationDto.prix
    }
}