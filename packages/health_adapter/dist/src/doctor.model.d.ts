import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Doctor extends ConvectorModel<Doctor> {
    readonly type = "io.worldsibu.doctor";
    readonly rol = "doctor";
    identifier: number;
    firstName: string;
    secondName: string;
    firstLastName: string;
    secondLastName: string;
    speciality: string;
    email: string;
    hashedPassword: string;
}
