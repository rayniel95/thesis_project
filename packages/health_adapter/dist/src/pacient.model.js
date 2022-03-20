"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pacient = void 0;
const tslib_1 = require("tslib");
const yup = tslib_1.__importStar(require("yup"));
const convector_core_model_1 = require("@worldsibu/convector-core-model");
class Pacient extends convector_core_model_1.ConvectorModel {
    constructor() {
        super(...arguments);
        this.type = 'io.worldsibu.pacient';
        this.rol = 'paciente';
    }
}
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], Pacient.prototype, "type", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], Pacient.prototype, "rol", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Pacient.prototype, "identifier", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Pacient.prototype, "dayOfBirth", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Pacient.prototype, "monthOfBirth", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Pacient.prototype, "yearOfBirth", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Pacient.prototype, "race", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Pacient.prototype, "sex", void 0);
exports.Pacient = Pacient;
//# sourceMappingURL=pacient.model.js.map