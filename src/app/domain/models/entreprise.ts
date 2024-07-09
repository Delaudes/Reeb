import { EntrepriseDto } from "../../infra/dto/entreprise"

export class Entreprise {
    readonly nom: string = ""

    constructor(entrepriseDto: EntrepriseDto) {
        this.nom = entrepriseDto.nom
    }
}