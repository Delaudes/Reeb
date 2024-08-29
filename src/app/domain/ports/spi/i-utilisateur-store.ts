import { Utilisateur } from "../../models/utilisateur"

export interface IUtilisateurStore {
    estConnecte(): boolean
    peutEditer(idMenu: number): boolean
    deconnecter(): void
    connecter(utilisateur: Utilisateur): void
    getUtilisateur(): Utilisateur | undefined
}