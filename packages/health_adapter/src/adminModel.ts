import { Model } from './util';
import { Admin } from './admin.model';


export class AdminModel extends Model {

    public async createAdmin(
        identifier: number, firstName: string, email: string, 
        hashedPassword: string
    ): Promise<Admin> {
        
        return await this.create<Admin>(
            Admin, identifier.toString(), firstName, email,
            hashedPassword
        )
    }

    public async getOneAdmin(identifier: number): Promise<Admin> {
        return await this.getOne<Admin>(Admin, identifier)
    }

    public async getAllAdmins(): Promise<Admin[]> {
        return await this.getAll<Admin>(Admin)
    }

    public async getOneAdminByEmail(email: string): Promise<Admin> {
        return await this.getOneByEmail<Admin>(Admin, email)
    }
}