import { Utilisateur } from "../models/utilisateur";
import { IUtilisateurStore } from "../ports/spi/i-utilisateur-store";

export class UtilisateurStore implements IUtilisateurStore {
    private utilisateur?: Utilisateur
    private static readonly LOCAL_STORAGE_UTILISATEUR_KEY = 'utilisateur';

    constructor() {
        const utilisateurJSON = localStorage.getItem(UtilisateurStore.LOCAL_STORAGE_UTILISATEUR_KEY);
        if (utilisateurJSON) {
            this.utilisateur = JSON.parse(utilisateurJSON);
        }
    }
    peutEditer(idMenu: number): boolean {
        return this.estConnecte() && this.utilisateur?.idMenu === idMenu
    }

    estConnecte(): boolean {
        return this.utilisateur ? true : false
    }

    deconnecter(): void {
        this.utilisateur = undefined
        localStorage.removeItem(UtilisateurStore.LOCAL_STORAGE_UTILISATEUR_KEY);
    }

    connecter(utilisateur: Utilisateur): void {
        this.utilisateur = utilisateur
        localStorage.setItem(UtilisateurStore.LOCAL_STORAGE_UTILISATEUR_KEY, JSON.stringify(utilisateur));
    }

    getUtilisateur(): Utilisateur | undefined {
        return this.utilisateur
    }
}