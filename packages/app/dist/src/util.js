"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = exports.doctorAccess = exports.adminAccess = exports.hashPassword = exports.DrugExposureModelAdminBroProperties = exports.NoteModelAdminBroProperties = exports.PacientModelAdminBroProperties = exports.DoctorModelAdminBroProperties = exports.AdminModelAdminBroProperties = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const adminModel_1 = require("../../../health_adapter/dist/src/adminModel");
const doctorModel_1 = require("../../../health_adapter/dist/src/doctorModel");
const env_1 = require("./env");
const NotFilterProperty = { list: true, edit: true, filter: false, show: true };
exports.AdminModelAdminBroProperties = {
    hashedPassword: {
        isVisible: false
    },
    password: {
        type: 'string',
        isVisible: {
            list: false, edit: true, filter: false, show: false
        },
        name: 'Contrasena', position: 2
    },
    identifier: {
        isId: true, position: 1, type: 'number',
        isVisible: NotFilterProperty
    },
    firstName: {
        name: 'Primer Nombre', position: 4, type: 'string',
        isVisible: NotFilterProperty
    },
    email: {
        type: 'string', position: 3, isVisible: NotFilterProperty
    }
};
const Person = {
    secondName: {
        name: 'Segundo Nombre', position: 5, type: 'string',
        isVisible: NotFilterProperty
    },
    firstLastName: {
        name: 'Primer Apellido', position: 6, type: 'string',
        isVisible: NotFilterProperty
    },
    secondLastName: {
        name: 'Segundo Apellido', position: 7, type: 'string',
        isVisible: NotFilterProperty
    }
};
exports.DoctorModelAdminBroProperties = Object.assign({
    speciality: {
        name: 'Especialidad', position: 8, type: 'string',
        isVisible: NotFilterProperty
    }
}, Person, exports.AdminModelAdminBroProperties);
exports.PacientModelAdminBroProperties = Object.assign({
    dayOfBirth: {
        name: 'Dia de nacido', type: 'number', position: 2,
        isVisible: NotFilterProperty
    },
    monthOfBirth: {
        name: 'Mes de nacido', type: 'number', position: 3,
        isVisible: NotFilterProperty
    },
    yearOfBirth: {
        name: 'Ano de nacido', type: 'number', position: 4,
        isVisible: NotFilterProperty
    },
    race: {
        name: 'Raza', type: 'string', position: 5,
        isVisible: NotFilterProperty
    },
    sex: {
        name: 'Sexo', type: 'string', position: 6,
        isVisible: NotFilterProperty
    },
    identifier: {
        isId: true, position: 1, type: 'number',
        isVisible: NotFilterProperty
    },
});
exports.NoteModelAdminBroProperties = {
    noteId: {
        type: 'string', position: 1, isId: true,
        isVisible: NotFilterProperty
    },
    pacientIdentifier: {
        name: 'Identificador del paciente', type: 'string', position: 2,
        isVisible: NotFilterProperty
    },
    noteDate: {
        name: 'Fecha', type: 'date', position: 3, isVisible: NotFilterProperty
    },
    noteTitle: {
        name: 'Titulo', type: 'string', position: 4, isVisible: NotFilterProperty
    },
    noteText: {
        name: 'Texto', type: 'textarea', position: 5, isVisible: NotFilterProperty
    }
};
exports.DrugExposureModelAdminBroProperties = {
    drugId: {
        type: 'number', position: 1, isId: true,
        isVisible: NotFilterProperty
    },
    pacientIdentifier: {
        name: 'Identificador del paciente', type: 'number', position: 2,
        isVisible: NotFilterProperty
    },
    startDate: {
        name: 'Tiempo de comienzo', type: 'date', position: 3,
        isVisible: NotFilterProperty
    },
    endDate: {
        name: 'Tiempo de finalizacion', type: 'date', position: 4,
        isVisible: NotFilterProperty
    },
    drugType: {
        name: 'Tipo de medicamento', type: 'string', position: 5,
        isVisible: NotFilterProperty
    },
    daysSupply: {
        name: 'Cantidad de dias de administracion', type: 'number', position: 6,
        isVisible: NotFilterProperty
    },
    lotNumber: {
        name: 'Numero del lote', type: 'number', position: 7,
        isVisible: NotFilterProperty
    },
    stopReason: {
        name: 'Razon de suspension', type: 'textarea', position: 8,
        isVisible: NotFilterProperty
    }
};
function hashPassword(request, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (request.payload.Contrasena) {
            request.payload = Object.assign(Object.assign({}, request.payload), { hashedPassword: yield bcrypt_1.default.hash(request.payload.Contrasena, 10), Contrasena: undefined });
        }
        return request;
    });
}
exports.hashPassword = hashPassword;
function adminAccess(context) {
    return context.currentAdmin && (context.currentAdmin.rol === 'admin');
}
exports.adminAccess = adminAccess;
function doctorAccess(context) {
    return context.currentAdmin && (context.currentAdmin.rol === 'doctor');
}
exports.doctorAccess = doctorAccess;
function authentication(email, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const adminModel = new adminModel_1.AdminModel(env_1.connectionProfile, env_1.connectionOptions);
        const doctorModel = new doctorModel_1.DoctorModel(env_1.connectionProfile, env_1.connectionOptions);
        let user = yield adminModel.getOneAdminByEmail(email);
        if (user) {
            const matched = yield bcrypt_1.default.compare(password, user.hashedPassword);
            if (matched) {
                return user;
            }
        }
        user = yield doctorModel.getOneDoctorByEmail(email);
        if (user) {
            const matched = yield bcrypt_1.default.compare(password, user.hashedPassword);
            if (matched) {
                return user;
            }
        }
        return false;
    });
}
exports.authentication = authentication;
//# sourceMappingURL=util.js.map