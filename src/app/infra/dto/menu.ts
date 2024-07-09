import { EntrepriseDto } from "./entreprise"
import { SectionDto } from "./section"

export interface MenuDto {
    id: number,
    sections: SectionDto[]
    entreprise: EntrepriseDto
}