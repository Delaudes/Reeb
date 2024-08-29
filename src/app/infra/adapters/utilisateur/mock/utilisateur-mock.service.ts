import { Observable, of } from "rxjs";
import { Utilisateur } from "../../../../domain/models/utilisateur";
import { IUtilisateurGestionnaire } from "../../../../domain/ports/api/i-utilisateur-gestionnaire";
import { createUtilisateurMock } from "../../../../domain/models/mocks/utilisateur-mock";

export class UtilisateurServiceMock implements IUtilisateurGestionnaire {
    seConnecter(email: string, motDePasse: string): Observable<Utilisateur> {
        return of(createUtilisateurMock())
    }
    creerCompte(email: string, motDePasse: string, nomEtablissement: string): Observable<Utilisateur> {
        return this.seConnecter(email, motDePasse)
    }
}