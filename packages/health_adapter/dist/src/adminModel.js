"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
const admin_model_1 = require("./admin.model");
class AdminModel extends util_1.Model {
    createAdmin(identifier, firstName, email, hashedPassword) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.create(admin_model_1.Admin, identifier.toString(), firstName, email, hashedPassword);
        });
    }
    getOneAdmin(identifier) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getOne(admin_model_1.Admin, identifier);
        });
    }
    getAllAdmins() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getAll(admin_model_1.Admin);
        });
    }
    getOneAdminByEmail(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getOneByEmail(admin_model_1.Admin, email);
        });
    }
}
exports.AdminModel = AdminModel;
//# sourceMappingURL=adminModel.js.map