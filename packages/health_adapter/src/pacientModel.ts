import { Model } from './util';
import { Pacient } from './pacient.model';


export class PacientModel extends Model {

    public async createPacient(
        identifier: number, dayOfBirth: number, monthOfBirth: number,
        yearOfBirth: number, sex: string, race: string
    ): Promise<Pacient> {
        
        return await this.create<Pacient>(
            Pacient, identifier.toString(), dayOfBirth.toString(),
            monthOfBirth.toString(), yearOfBirth.toString(), sex, race
        )
    }

    public async getOnePacient(identifier: number): Promise<Pacient> {
        return await this.getOne<Pacient>(Pacient, identifier)
    }

    public async getAllPacients(): Promise<Pacient[]> {
        return await this.getAll<Pacient>(Pacient)
    }
}