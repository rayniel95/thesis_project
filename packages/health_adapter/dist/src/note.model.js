"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const tslib_1 = require("tslib");
const yup = tslib_1.__importStar(require("yup"));
const convector_core_model_1 = require("@worldsibu/convector-core-model");
class Note extends convector_core_model_1.ConvectorModel {
    constructor() {
        super(...arguments);
        this.type = 'io.worldsibu.note';
        this.rol = 'nota';
    }
}
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], Note.prototype, "type", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    tslib_1.__metadata("design:type", Object)
], Note.prototype, "rol", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Note.prototype, "noteId", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Note.prototype, "pacientIdentifier", void 0);
tslib_1.__decorate([
    convector_core_model_1.ReadOnly(),
    convector_core_model_1.Required(),
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Note.prototype, "noteDate", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Note.prototype, "noteTitle", void 0);
tslib_1.__decorate([
    convector_core_model_1.Validate(yup.string()),
    tslib_1.__metadata("design:type", String)
], Note.prototype, "noteText", void 0);
exports.Note = Note;
//# sourceMappingURL=note.model.js.map