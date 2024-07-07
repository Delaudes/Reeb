import { Consommation } from "./consommation"
import { SousSection } from "./sous-section"

export class Section {
    readonly sousSections: SousSection[] = []
    readonly consommations: Consommation[] = []
    readonly titre: string = 'Titre section'
}