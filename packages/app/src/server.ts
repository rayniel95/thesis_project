import AdminBro from 'admin-bro'
import * as AdminBroExpressjs from 'admin-bro-expressjs'
import express from 'express'
import {Database} from '../../health_adapter/dist/src/database'
import {Resource} from '../../health_adapter/dist/src/resource'
import ExpressFormidable from 'express-formidable'
import {AdminModel} from '../../health_adapter/dist/src/adminModel'
import {DoctorModel} from '../../health_adapter/dist/src/doctorModel'
import {PacientModel} from '../../health_adapter/dist/src/pacientModel'
import {DrugExposureModel} from '../../health_adapter/dist/src/drugExposureModel'
import {NoteModel} from '../../health_adapter/dist/src/noteModel'
import {
    AdminModelAdminBroProperties, DoctorModelAdminBroProperties, 
    PacientModelAdminBroProperties, NoteModelAdminBroProperties,
    DrugExposureModelAdminBroProperties, hashPassword, authentication, doctorAccess, adminAccess
} from './util'
import {connectionProfile, connectionOptions} from './env'

// todo user lerna form manage local dependencies
AdminBro.registerAdapter({Database, Resource})
// todo this code must be best organized
//todo use an docker container for server and database
export const app = express()
app.use(ExpressFormidable())


// Routes definitions
app.get('/', (req, res) => res.redirect('/admin'))


const adminBro = new AdminBro({
    resources: [
        {
            resource: new AdminModel(connectionProfile, connectionOptions),
            options: {
                properties: AdminModelAdminBroProperties,
                actions: {
                    new: {
                        before: hashPassword,
                        isAccessible: adminAccess
                    },
                    list: {
                        isAccessible: adminAccess
                    },
                    edit: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    }
                }
            }
        },
        {
            resource: new DoctorModel(connectionProfile, connectionOptions),
            options: {
                properties: DoctorModelAdminBroProperties,
                filterProperties: {},
                actions: {
                    new: {
                        before: hashPassword,
                        isAccessible: adminAccess
                    },
                    list: {
                        isAccessible: adminAccess
                    },
                    edit: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    }
                }
            }
        },
        {
            resource: new PacientModel(connectionProfile, connectionOptions),
            options: {
                properties: PacientModelAdminBroProperties, 
                filterProperties: {},
                actions: {
                    new: {
                        isAccessible: doctorAccess
                    },
                    list: {
                        isAccessible: doctorAccess
                    },
                    edit: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    }
                }
            }
        },
        {
            resource: new DrugExposureModel(connectionProfile, connectionOptions),
            options: {
                properties: DrugExposureModelAdminBroProperties, 
                filterProperties: {},
                actions: {
                    new: {
                        isAccessible: doctorAccess
                    },
                    list: {
                        isAccessible: doctorAccess,
                        isVisible: true
                    },
                    edit: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    }
                }
            }
        },
        {
            resource: new NoteModel(connectionProfile, connectionOptions),
            options: {
                properties: NoteModelAdminBroProperties,
                filterProperties: {},
                actions: {
                    new: {
                        isAccessible: doctorAccess
                    },
                    list: {
                        isAccessible: doctorAccess
                    },
                    edit: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    delete: {
                        isAccessible: (params)=> {return false},
                        isVisible: false
                    },
                    bulkDelete: {
                        isAccessible: (params)=> {return false},
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
  })

  // todo trying using package peer command for avoid dependencies cheking
const router = AdminBroExpressjs.buildAuthenticatedRouter(
    adminBro, 
    {
        authenticate: authentication, 
        cookiePassword: 'some-secret-password-used-to-secure-cookie'
    }
)
  
app.use(adminBro.options.rootPath, router)