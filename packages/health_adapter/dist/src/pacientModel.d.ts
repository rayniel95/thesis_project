import { Model } from './util';
import { Pacient } from './pacient.model';
export declare class PacientModel extends Model {
    createPacient(identifier: number, dayOfBirth: number, monthOfBirth: number, yearOfBirth: number, sex: string, race: string): Promise<Pacient>;
    getOnePacient(identifier: number): Promise<Pacient>;
    getAllPacients(): Promise<Pacient[]>;
}
