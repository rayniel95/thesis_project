"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const tslib_1 = require("tslib");
const admin_bro_1 = tslib_1.__importDefault(require("admin-bro"));
const AdminBroExpressjs = tslib_1.__importStar(require("admin-bro-expressjs"));
const express_1 = tslib_1.__importDefault(require("express"));
const database_1 = require("../../../health_adapter/dist/src/database");
const resource_1 = require("../../../health_adapter/dist/src/resource");
const express_formidable_1 = tslib_1.__importDefault(require("express-formidable"));
const adminModel_1 = require("../../../health_adapter/dist/src/adminModel");
const doctorModel_1 = require("../../../health_adapter/dist/src/doctorModel");
const pacientModel_1 = require("../../../health_adapter/dist/src/pacientModel");
const drugExposureModel_1 = require("../../../health_adapter/dist/src/drugExposureModel");
const noteModel_1 = require("../../../health_adapter/dist/src/noteModel");
const util_1 = require("./util");
const env_1 = require("./env");
admin_bro_1.default.registerAdapter({ Database: database_1.Database, Resource: resource_1.Resource });
exports.app = express_1.default();
exports.app.use(express_formidable_1.default());
exports.app.get('/', (req, res) => res.redirect('/admin'));
const adminBro = new admin_bro_1.default({
    resources: [
        {
            resource: new adminModel_1.AdminModel(env_1.connectionProfile, env_1.connectionOptions),
            options: {
                properties: util_1.AdminModelAdminBroProperties,
                actions: {
                    new: {
                        before: util_1.hashPassword,
                        isAccessible: util_1.adminAccess
                    },
                    list: {
                        isAccessible: util_1.adminAccess
                    },
                    edit: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    }
                }
            }
        },
        {
            resource: new doctorModel_1.DoctorModel(env_1.connectionProfile, env_1.connectionOptions),
            options: {
                properties: util_1.DoctorModelAdminBroProperties,
                filterProperties: {},
                actions: {
                    new: {
                        before: util_1.hashPassword,
                        isAccessible: util_1.adminAccess
                    },
                    list: {
                        isAccessible: util_1.adminAccess
                    },
                    edit: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    }
                }
            }
        },
        {
            resource: new pacientModel_1.PacientModel(env_1.connectionProfile, env_1.connectionOptions),
            options: {
                properties: util_1.PacientModelAdminBroProperties,
                filterProperties: {},
                actions: {
                    new: {
                        isAccessible: util_1.doctorAccess
                    },
                    list: {
                        isAccessible: util_1.doctorAccess
                    },
                    edit: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    }
                }
            }
        },
        {
            resource: new drugExposureModel_1.DrugExposureModel(env_1.connectionProfile, env_1.connectionOptions),
            options: {
                properties: util_1.DrugExposureModelAdminBroProperties,
                filterProperties: {},
                actions: {
                    new: {
                        isAccessible: util_1.doctorAccess
                    },
                    list: {
                        isAccessible: util_1.doctorAccess,
                        isVisible: true
                    },
                    edit: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    }
                }
            }
        },
        {
            resource: new noteModel_1.NoteModel(env_1.connectionProfile, env_1.connectionOptions),
            options: {
                properties: util_1.NoteModelAdminBroProperties,
                filterProperties: {},
                actions: {
                    new: {
                        isAccessible: util_1.doctorAccess
                    },
                    list: {
                        isAccessible: util_1.doctorAccess
                    },
                    edit: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params) => { return false; },
                        isVisible: false
                    }
                }
            }
        }
    ],
    rootPath: '/admin',
    branding: {
        companyName: 'SOFTEL',
        logo: false,
        softwareBrothers: false
    }
});
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
    authenticate: util_1.authentication,
    cookiePassword: 'some-secret-password-used-to-secure-cookie'
});
exports.app.use(adminBro.options.rootPath, router);
//# sourceMappingURL=server.js.map