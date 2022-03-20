import {ActionContext, ActionRequest} from 'admin-bro'
import bcrypt from 'bcrypt'
import { AdminModel } from '../../health_adapter/dist/src/adminModel'
import { DoctorModel } from '../../health_adapter/dist/src/doctorModel'
import { connectionProfile, connectionOptions } from './env'
import { Admin } from '../../health_adapter/dist/src/admin.model'
import { Doctor } from '../../health_adapter/dist/src/doctor.model'



const NotFilterProperty = {list: true, edit: true, filter: false, show: true}

export const AdminModelAdminBroProperties = {
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
}

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
}

export const DoctorModelAdminBroProperties = Object.assign(
    {
        speciality: {
            name: 'Especialidad', position: 8, type: 'string',
            isVisible: NotFilterProperty
        }
    },
    Person, AdminModelAdminBroProperties
)
    
export const PacientModelAdminBroProperties = Object.assign(
    {
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
    }
)
// todo see why isnt workink available values
export const NoteModelAdminBroProperties = {
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
        name: 'Titulo', type:'string', position: 4, isVisible: NotFilterProperty
    },
    noteText: {
        name: 'Texto', type: 'textarea', position: 5, isVisible: NotFilterProperty
    }
}

export const DrugExposureModelAdminBroProperties = {
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
}
// ! be careful hashedpassword is string not number
export async function hashPassword(request: ActionRequest, 
    context: ActionContext): Promise<ActionRequest>{
    if(request.payload.Contrasena) {
        request.payload = {
            ...request.payload,
            hashedPassword: await bcrypt.hash(request.payload.Contrasena, 10),
            Contrasena: undefined,
        }
    }

    return request
}

export function adminAccess(context: ActionContext): boolean {
    return context.currentAdmin && (context.currentAdmin.rol === 'admin')
}

export function doctorAccess(context: ActionContext): boolean {
    return context.currentAdmin && (context.currentAdmin.rol === 'doctor')
}
type authentTypes = Doctor|Admin|boolean
export async function authentication(email, password): Promise<authentTypes> {

    const adminModel = new AdminModel(connectionProfile, connectionOptions)
    const doctorModel = new DoctorModel(connectionProfile, connectionOptions)

    let user: Admin|Doctor = await adminModel.getOneAdminByEmail(email)
    if (user) {
      const matched = await bcrypt.compare(password, user.hashedPassword)
      if (matched) {
        return user
      }
    }
    user = await doctorModel.getOneDoctorByEmail(email)
    if (user) {
        const matched = await bcrypt.compare(password, user.hashedPassword)
        if (matched) {
          return user
        }
    }

    return false
}