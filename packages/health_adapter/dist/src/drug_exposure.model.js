"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrugExposure = void 0;
const tslib_1 = require("tslib");
const yup = tslib_1.__importStar(require("yup"));
const convector_core_model_1 = require("@worldsibu/convector-core-model");
class DrugExposure extends convector_core_model_1.ConvectorModel {
    constructor() {
        super(...arguments);
        this.type = 'io.worldsibu.dugExposure';
        this.rol = 'droga';
    }
}
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], DrugExposure.prototype, "type", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], DrugExposure.prototype, "rol", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], DrugExposure.prototype, "drugId", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], DrugExposure.prototype, "pacientIdentifier", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], DrugExposure.prototype, "startDate", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], DrugExposure.prototype, "endDate", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], DrugExposure.prototype, "drugType", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], DrugExposure.prototype, "stopReason", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], DrugExposure.prototype, "daysSupply", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], DrugExposure.prototype, "lotNumber", void 0);
exports.DrugExposure = DrugExposure;
//# sourceMappingURL=drug_exposure.model.js.map