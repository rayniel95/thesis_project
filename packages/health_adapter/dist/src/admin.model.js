"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const tslib_1 = require("tslib");
const yup = tslib_1.__importStar(require("yup"));
const convector_core_model_1 = require("@worldsibu/convector-core-model");
class Admin extends convector_core_model_1.ConvectorModel {
    constructor() {
        super(...arguments);
        this.type = 'io.worldsibu.admin';
        this.rol = 'admin';
    }
}
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], Admin.prototype, "type", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], Admin.prototype, "rol", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Admin.prototype, "identifier", void 0);
tslib_1.__decorate([
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "firstName", void 0);
tslib_1.__decorate([
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "email", void 0);
tslib_1.__decorate([
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "hashedPassword", void 0);
exports.Admin = Admin;
//# sourceMappingURL=admin.model.js.map