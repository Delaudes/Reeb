import { UtilisateurDto } from "../../infra/dto/utilisateur"

export class Utilisateur {
    readonly id: number = 0
    readonly jeton: string = ''
    readonly idMenu: number = 0

    constructor(utilisateurDto: UtilisateurDto) {
        this.id = utilisateurDto.id
        this.jeton = utilisateurDto.jeton
        this.idMenu = utilisateurDto.idMenu
    }
}