"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const tslib_1 = require("tslib");
const admin_bro_1 = tslib_1.__importDefault(require("admin-bro"));
const pacientModel_1 = require("./pacientModel");
const adminModel_1 = require("./adminModel");
const noteModel_1 = require("./noteModel");
const doctorModel_1 = require("./doctorModel");
const drugExposureModel_1 = require("./drugExposureModel");
const pacient_model_1 = require("./pacient.model");
const doctor_model_1 = require("./doctor.model");
const drug_exposure_model_1 = require("./drug_exposure.model");
const admin_model_1 = require("./admin.model");
const note_model_1 = require("./note.model");
class Resource extends admin_bro_1.default.BaseResource {
    constructor(model) {
        super(model);
        this.model = model;
        this.models = [
            pacientModel_1.PacientModel, drugExposureModel_1.DrugExposureModel, adminModel_1.AdminModel,
            noteModel_1.NoteModel, doctorModel_1.DoctorModel
        ];
        this.modelsToObj = [
            pacient_model_1.Pacient, drug_exposure_model_1.DrugExposure, admin_model_1.Admin, note_model_1.Note, doctor_model_1.Doctor
        ];
        this.modelsToObjName = [
            'Paciente', 'Medicacion', 'Admin', 'Nota', 'Doctor'
        ];
    }
    static isAdapterFor(rawResource) {
        return [
            pacientModel_1.PacientModel, drugExposureModel_1.DrugExposureModel, adminModel_1.AdminModel,
            noteModel_1.NoteModel, doctorModel_1.DoctorModel
        ].some((val) => rawResource instanceof val);
    }
    databaseName() { return 'Vida'; }
    name() {
        return this.modelsToObjName[this.models.findIndex((value) => this.model instanceof value)];
    }
    id() { return this.name().toLowerCase(); }
    properties() {
        if (this.model instanceof adminModel_1.AdminModel) {
            return [
                new admin_bro_1.default.BaseProperty({ path: 'identifier', isId: true }),
                new admin_bro_1.default.BaseProperty({ path: 'firstName' }),
                new admin_bro_1.default.BaseProperty({ path: 'email' }),
                new admin_bro_1.default.BaseProperty({ path: 'hashedPassword' })
            ];
        }
        else if (this.model instanceof pacientModel_1.PacientModel) {
            return [
                new admin_bro_1.default.BaseProperty({ path: 'identifier', isId: true }),
                new admin_bro_1.default.BaseProperty({ path: 'dayOfBirth' }),
                new admin_bro_1.default.BaseProperty({ path: 'monthOfBirth' }),
                new admin_bro_1.default.BaseProperty({ path: 'yearOfBirth' }),
                new admin_bro_1.default.BaseProperty({ path: 'sex' }),
                new admin_bro_1.default.BaseProperty({ path: 'race' })
            ];
        }
        else if (this.model instanceof drugExposureModel_1.DrugExposureModel) {
            return [
                new admin_bro_1.default.BaseProperty({ path: 'drugId', isId: true }),
                new admin_bro_1.default.BaseProperty({ path: 'pacientIdentifier' }),
                new admin_bro_1.default.BaseProperty({ path: 'startDate' }),
                new admin_bro_1.default.BaseProperty({ path: 'endDate' }),
                new admin_bro_1.default.BaseProperty({ path: 'drugType' }),
                new admin_bro_1.default.BaseProperty({ path: 'stopReason' }),
                new admin_bro_1.default.BaseProperty({ path: 'daysSupply' }),
                new admin_bro_1.default.BaseProperty({ path: 'lotNumber' })
            ];
        }
        else if (this.model instanceof noteModel_1.NoteModel) {
            return [
                new admin_bro_1.default.BaseProperty({ path: 'noteId', isId: true }),
                new admin_bro_1.default.BaseProperty({ path: 'pacientIdentifier' }),
                new admin_bro_1.default.BaseProperty({ path: 'noteDate' }),
                new admin_bro_1.default.BaseProperty({ path: 'noteTitle' }),
                new admin_bro_1.default.BaseProperty({ path: 'noteText' })
            ];
        }
        return [
            new admin_bro_1.default.BaseProperty({ path: 'identifier', isId: true }),
            new admin_bro_1.default.BaseProperty({ path: 'firstName' }),
            new admin_bro_1.default.BaseProperty({ path: 'secondName' }),
            new admin_bro_1.default.BaseProperty({ path: 'firstLastName' }),
            new admin_bro_1.default.BaseProperty({ path: 'secondLastName' }),
            new admin_bro_1.default.BaseProperty({ path: 'speciality' }),
            new admin_bro_1.default.BaseProperty({ path: 'email' }),
            new admin_bro_1.default.BaseProperty({ path: 'hashedPassword' })
        ];
    }
    property(path) {
        return new admin_bro_1.default.BaseProperty({ path });
    }
    create(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('inside create');
            console.log(params);
            let result;
            if (this.model instanceof pacientModel_1.PacientModel) {
                result = yield this.model.createPacient(params['identifier'], params['Dia de nacido'], params['Mes de nacido'], params['Ano de nacido'], params['Sexo'], params['Raza']);
                console.log(result);
            }
            else if (this.model instanceof adminModel_1.AdminModel) {
                result = yield this.model.createAdmin(params['identifier'], params['Primer Nombre'], params['email'], params['hashedPassword']);
                console.log(result);
            }
            else if (this.model instanceof drugExposureModel_1.DrugExposureModel) {
                result = yield this.model.createDrugExposure(params['drugId'], params['Identificador del paciente'], params['Tiempo de comienzo'], params['Tiempo de finalizacion'], params['Tipo de medicamento'], params['Razon de suspension'], params['Cantidad de dias de administracion'], params['Numero del lote']);
            }
            else if (this.model instanceof noteModel_1.NoteModel) {
                result = yield this.model.createNote(params['noteId'], params['Identificador del paciente'], params['Fecha'], params['Titulo'], params['Texto']);
            }
            else {
                result = yield this.model.createDoctor(params['identifier'], params['Primer Nombre'], params['Segundo Nombre'], params['Primer Apellido'], params['Segundo Apellido'], params['Especialidad'], params['email'], params['hashedPassword']);
            }
            console.log('executed create');
            return result;
        });
    }
    update(id, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('inside update');
            let result;
            try {
                result = yield this.findOne(id);
            }
            catch (error) {
                result = false;
            }
            if (result) {
                return result;
            }
            result = yield this.create(params);
            console.log('executed update');
            return result;
        });
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            throw Error('NI Error, not implemented delete in resource');
        });
    }
    count(filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('inside count');
            const result = yield this.find(filter, {});
            console.log('executed count in resource');
            return result.length;
        });
    }
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('inside findone');
            let result;
            if (this.model instanceof adminModel_1.AdminModel) {
                result = yield this.model.getOneAdmin(Number(id));
                console.log('executed findOne');
                return new admin_bro_1.default.BaseRecord({
                    'identifier': result.identifier,
                    'Primer Nombre': result.firstName,
                    'email': result.email,
                    'hashedPassword': result.hashedPassword
                }, this);
            }
            else if (this.model instanceof pacientModel_1.PacientModel) {
                result = yield this.model.getOnePacient(Number(id));
                console.log('executed findOne');
                return new admin_bro_1.default.BaseRecord({
                    'identifier': result.identifier,
                    'Dia de nacido': result.dayOfBirth,
                    'Mes de nacido': result.monthOfBirth,
                    'Ano de nacido': result.yearOfBirth,
                    'Sexo': result.sex, 'Raza': result.race
                }, this);
            }
            else if (this.model instanceof drugExposureModel_1.DrugExposureModel) {
                result = yield this.model.getOneDrugExposure(Number(id));
                console.log('executed findOne');
                return new admin_bro_1.default.BaseRecord({
                    'drugId': result.drugId,
                    'Identificador del paciente': result.pacientIdentifier,
                    'Tiempo de comienzo': result.startDate,
                    'Tiempo de finalizacion': result.endDate,
                    'Tipo de medicamento': result.drugType,
                    'Razon de suspension': result.stopReason,
                    'Cantidad de dias de administracion': result.daysSupply,
                    'Numero del lote': result.lotNumber
                }, this);
            }
            else if (this.model instanceof noteModel_1.NoteModel) {
                result = yield this.model.getOneNote(Number(id));
                console.log('executed findOne');
                return new admin_bro_1.default.BaseRecord({
                    'noteId': result.noteId,
                    'Identificador del paciente': result.pacientIdentifier,
                    'Fecha': result.noteDate, 'Titulo': result.noteTitle,
                    'Texto': result.noteText
                }, this);
            }
            result = yield this.model.getOneDoctor(Number(id));
            console.log('executed findOne');
            return new admin_bro_1.default.BaseRecord({
                'identifier': result.identifier, 'Primer Nombre': result.firstName,
                'Segundo Nombre': result.secondName,
                'Primer Apellido': result.firstLastName,
                'Segundo Apellido': result.secondLastName,
                'Especialidad': result.speciality, 'email': result.email,
                'hashedPassword': result.hashedPassword
            }, this);
        });
    }
    find(filter, { limit = 20, offset = 0, sort = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { direction, sortBy } = sort;
            console.log('inside find');
            let result;
            if (this.model instanceof adminModel_1.AdminModel) {
                result = yield this.model.getAllAdmins();
                console.log('executed find');
                return result.map((value) => new admin_bro_1.default.BaseRecord({
                    'identifier': value.identifier,
                    'Primer Nombre': value.firstName,
                    'email': value.email,
                    'hashedPassword': value.hashedPassword
                }, this));
            }
            else if (this.model instanceof pacientModel_1.PacientModel) {
                result = yield this.model.getAllPacients();
                console.log('executed find');
                return result.map((value) => new admin_bro_1.default.BaseRecord({
                    'identifier': value.identifier,
                    'Dia de nacido': value.dayOfBirth,
                    'Mes de nacido': value.monthOfBirth,
                    'Ano de nacido': value.yearOfBirth,
                    'Sexo': value.sex, 'Raza': value.race
                }, this));
            }
            else if (this.model instanceof drugExposureModel_1.DrugExposureModel) {
                result = yield this.model.getAllDrugsExposures();
                console.log('executed find');
                return result.map((value) => new admin_bro_1.default.BaseRecord({
                    'drugId': value.drugId,
                    'Identificador del paciente': value.pacientIdentifier,
                    'Tiempo de comienzo': value.startDate,
                    'Tiempo de finalizacion': value.endDate,
                    'Tipo de medicamento': value.drugType,
                    'Razon de suspension': value.stopReason,
                    'Cantidad de dias de administracion': value.daysSupply,
                    'Numero del lote': value.lotNumber
                }, this));
            }
            else if (this.model instanceof noteModel_1.NoteModel) {
                result = yield this.model.getAllNotes();
                console.log('executed find');
                return result.map((value) => new admin_bro_1.default.BaseRecord({
                    'noteId': value.noteId,
                    'Identificador del paciente': value.pacientIdentifier,
                    'Fecha': value.noteDate, 'Titulo': value.noteTitle,
                    'Texto': value.noteText
                }, this));
            }
            result = yield this.model.getAllDoctors();
            console.log('executed find');
            return result.map((value) => new admin_bro_1.default.BaseRecord({
                'identifier': value.identifier, 'Primer Nombre': value.firstName,
                'Segundo Nombre': value.secondName,
                'Primer Apellido': value.firstLastName,
                'Segundo Apellido': value.secondLastName,
                'Especialidad': value.speciality, 'email': value.email,
                'hashedPassword': value.hashedPassword
            }, this));
        });
    }
}
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map