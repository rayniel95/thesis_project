import { Model } from './util';
import { DrugExposure } from './drug_exposure.model';
export declare class DrugExposureModel extends Model {
    createDrugExposure(drugId: number, pacientIdentifier: number, startDate: Date, endDate: Date, drugType: string, stopReason: string, daysSupply: number, lotNumber: number): Promise<DrugExposure>;
    getOneDrugExposure(drugId: number): Promise<DrugExposure>;
    getAllDrugsExposures(): Promise<DrugExposure[]>;
}
