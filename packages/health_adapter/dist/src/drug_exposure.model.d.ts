import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class DrugExposure extends ConvectorModel<DrugExposure> {
    readonly type = "io.worldsibu.dugExposure";
    readonly rol = "droga";
    drugId: number;
    pacientIdentifier: number;
    startDate: string;
    endDate: string;
    drugType: string;
    stopReason: string;
    daysSupply: number;
    lotNumber: number;
}
