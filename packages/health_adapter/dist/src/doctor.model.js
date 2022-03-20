"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const tslib_1 = require("tslib");
const yup = tslib_1.__importStar(require("yup"));
const convector_core_model_1 = require("@worldsibu/convector-core-model");
class Doctor extends convector_core_model_1.ConvectorModel {
    constructor() {
        super(...arguments);
        this.type = 'io.worldsibu.doctor';
        this.rol = 'doctor';
    }
}
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], Doctor.prototype, "type", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], Doctor.prototype, "rol", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Doctor.prototype, "identifier", void 0);
tslib_1.__decorate([
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Doctor.prototype, "firstName", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Doctor.prototype, "secondName", void 0);
tslib_1.__decorate([
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Doctor.prototype, "firstLastName", void 0);
tslib_1.__decorate([
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Doctor.prototype, "secondLastName", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Doctor.prototype, "speciality", void 0);
tslib_1.__decorate([
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Doctor.prototype, "email", void 0);
tslib_1.__decorate([
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Doctor.prototype, "hashedPassword", void 0);
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.model.js.map