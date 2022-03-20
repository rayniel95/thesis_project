import { Model } from './util';
import { Doctor } from './doctor.model';
export declare class DoctorModel extends Model {
    createDoctor(identifier: number, firstName: string, secondName: string, firstLastName: string, secondLastName: string, speciality: string, email: string, hashedPassword: string): Promise<Doctor>;
    getOneDoctor(identifier: number): Promise<Doctor>;
    getAllDoctors(): Promise<Doctor[]>;
    getOneDoctorByEmail(email: string): Promise<Doctor>;
}
