import { Model } from './util';
import { Admin } from './admin.model';
export declare class AdminModel extends Model {
    createAdmin(identifier: number, firstName: string, email: string, hashedPassword: string): Promise<Admin>;
    getOneAdmin(identifier: number): Promise<Admin>;
    getAllAdmins(): Promise<Admin[]>;
    getOneAdminByEmail(email: string): Promise<Admin>;
}
