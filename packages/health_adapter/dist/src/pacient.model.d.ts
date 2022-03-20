import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Pacient extends ConvectorModel<Pacient> {
    readonly type = "io.worldsibu.pacient";
    readonly rol = "paciente";
    identifier: number;
    dayOfBirth: number;
    monthOfBirth: number;
    yearOfBirth: number;
    race: string;
    sex: string;
}
