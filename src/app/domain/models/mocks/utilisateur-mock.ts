import { UTILISATEUR_MOCK } from "../../../infra/dto/mocks/utilisateur.mock";
import { Utilisateur } from "../utilisateur";

export function createUtilisateurMock(): Utilisateur {
    return new Utilisateur(UTILISATEUR_MOCK)
}