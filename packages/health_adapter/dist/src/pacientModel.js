"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacientModel = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
const pacient_model_1 = require("./pacient.model");
class PacientModel extends util_1.Model {
    createPacient(identifier, dayOfBirth, monthOfBirth, yearOfBirth, sex, race) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.create(pacient_model_1.Pacient, identifier.toString(), dayOfBirth.toString(), monthOfBirth.toString(), yearOfBirth.toString(), sex, race);
        });
    }
    getOnePacient(identifier) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getOne(pacient_model_1.Pacient, identifier);
        });
    }
    getAllPacients() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getAll(pacient_model_1.Pacient);
        });
    }
}
exports.PacientModel = PacientModel;
//# sourceMappingURL=pacientModel.js.map