"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const tslib_1 = require("tslib");
const admin_bro_1 = tslib_1.__importDefault(require("admin-bro"));
const resource_1 = require("./resource");
const adminModel_1 = require("./adminModel");
const doctorModel_1 = require("./doctorModel");
const pacientModel_1 = require("./pacientModel");
const noteModel_1 = require("./noteModel");
const drugExposureModel_1 = require("./drugExposureModel");
class Database extends admin_bro_1.default.BaseDatabase {
    constructor(database) {
        super(database);
    }
    static isAdapterFor(database) {
        throw new Error('NI Error, not implemented isAdapterFor in database');
    }
    resources() {
        return [
            new resource_1.Resource(new adminModel_1.AdminModel(this.connProfile, this.connOptions)),
            new resource_1.Resource(new doctorModel_1.DoctorModel(this.connProfile, this.connOptions)),
            new resource_1.Resource(new pacientModel_1.PacientModel(this.connProfile, this.connOptions)),
            new resource_1.Resource(new noteModel_1.NoteModel(this.connProfile, this.connOptions)),
            new resource_1.Resource(new drugExposureModel_1.DrugExposureModel(this.connProfile, this.connOptions))
        ];
    }
}
exports.Database = Database;
//# sourceMappingURL=database.js.map