"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModel = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
const doctor_model_1 = require("./doctor.model");
class DoctorModel extends util_1.Model {
    createDoctor(identifier, firstName, secondName, firstLastName, secondLastName, speciality, email, hashedPassword) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.create(doctor_model_1.Doctor, identifier.toString(), firstName, secondName, firstLastName, secondLastName, speciality, email, hashedPassword);
        });
    }
    getOneDoctor(identifier) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getOne(doctor_model_1.Doctor, identifier);
        });
    }
    getAllDoctors() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getAll(doctor_model_1.Doctor);
        });
    }
    getOneDoctorByEmail(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getOneByEmail(doctor_model_1.Doctor, email);
        });
    }
}
exports.DoctorModel = DoctorModel;
//# sourceMappingURL=doctorModel.js.map