export class AgeWiseDataDTO {
    age_gap: string;
    recovered: number;
    deceased: number;
    hospitalized: number;
}
export class DayWiseDataDTO {
    date: string;
    recovered: number;
    deceased: number;
    hospitalized: number;
}
export interface stateObject {
    state_id: number;
    state_name: string;
}