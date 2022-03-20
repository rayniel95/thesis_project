import { Model } from './util';
import { Doctor } from './doctor.model';


export class DoctorModel extends Model {

    public async createDoctor(
        identifier: number, firstName: string, secondName: string,
        firstLastName: string, secondLastName: string, speciality: string,
        email: string, hashedPassword: string
    ): Promise<Doctor> {
        
        return await this.create<Doctor>(
            Doctor, identifier.toString(), firstName, secondName,
            firstLastName, secondLastName, speciality, email,
            hashedPassword
        )
    }

    public async getOneDoctor(identifier: number): Promise<Doctor> {
        return await this.getOne<Doctor>(Doctor, identifier)
    }

    public async getAllDoctors(): Promise<Doctor[]> {
        return await this.getAll<Doctor>(Doctor)
    }

    public async getOneDoctorByEmail(email: string): Promise<Doctor> {
        return await this.getOneByEmail<Doctor>(Doctor, email)
    }
}