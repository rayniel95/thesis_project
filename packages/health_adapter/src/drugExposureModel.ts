import { Model } from './util';
import { DrugExposure } from './drug_exposure.model';


export class DrugExposureModel extends Model {

    public async createDrugExposure(
        drugId: number, pacientIdentifier: number, startDate: Date, 
        endDate: Date, drugType: string, stopReason: string, 
        daysSupply: number, lotNumber: number
    ): Promise<DrugExposure> {
        
        return await this.create<DrugExposure>(
            DrugExposure, drugId.toString(), pacientIdentifier.toString(), 
            startDate.toString(), endDate.toString(), drugType,
            stopReason, daysSupply.toString(), lotNumber.toString()
        )
    }

    public async getOneDrugExposure(
        drugId: number
    ): Promise<DrugExposure> {

        return await this.getOne<DrugExposure>(DrugExposure, drugId)
    }

    public async getAllDrugsExposures(): Promise<DrugExposure[]> {
        return await this.getAll<DrugExposure>(DrugExposure)
    }
}