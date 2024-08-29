import { Observable } from "rxjs"
import { Utilisateur } from "../../models/utilisateur"

export interface IUtilisateurGestionnaire {
    seConnecter(email: string, motDePasse: string): Observable<Utilisateur>
    creerCompte(email: string, motDePasse: string, nomEtablissement: string): Observable<Utilisateur>
}