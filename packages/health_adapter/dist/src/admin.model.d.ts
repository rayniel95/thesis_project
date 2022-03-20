import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Admin extends ConvectorModel<Admin> {
    readonly type = "io.worldsibu.admin";
    readonly rol = "admin";
    identifier: number;
    firstName: string;
    email: string;
    hashedPassword: string;
}
