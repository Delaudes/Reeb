import { ConsommationDto } from "./consommation";

export interface SousSectionDto {
    consommations: ConsommationDto[],
    titre: string
}