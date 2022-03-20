"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const adminModel_1 = require("../../../health_adapter/dist/src/adminModel");
const env_1 = require("./env");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
function addAdmin() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let admin = new adminModel_1.AdminModel(env_1.connectionProfile, env_1.connectionOptions);
        admin.createAdmin(123, "Rainyel", "rainyel@rainyel.com", bcrypt_1.default.hashSync("cosa", 10));
        console.log("finished");
    });
}
addAdmin();
//# sourceMappingURL=addAdmin.js.map