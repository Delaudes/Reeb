import { ConsommationDto } from "./consommation";
import { SousSectionDto } from "./sous-section";

export interface SectionDto {
    sousSections: SousSectionDto[],
    consommations: ConsommationDto[],
    titre: string,
    id: number
}