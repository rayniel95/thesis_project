"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrugExposureModel = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
const drug_exposure_model_1 = require("./drug_exposure.model");
class DrugExposureModel extends util_1.Model {
    createDrugExposure(drugId, pacientIdentifier, startDate, endDate, drugType, stopReason, daysSupply, lotNumber) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.create(drug_exposure_model_1.DrugExposure, drugId.toString(), pacientIdentifier.toString(), startDate.toString(), endDate.toString(), drugType, stopReason, daysSupply.toString(), lotNumber.toString());
        });
    }
    getOneDrugExposure(drugId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getOne(drug_exposure_model_1.DrugExposure, drugId);
        });
    }
    getAllDrugsExposures() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getAll(drug_exposure_model_1.DrugExposure);
        });
    }
}
exports.DrugExposureModel = DrugExposureModel;
//# sourceMappingURL=drugExposureModel.js.map