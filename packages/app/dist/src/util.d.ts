import { ActionContext, ActionRequest } from 'admin-bro';
import { Admin } from '../../health_adapter/dist/src/admin.model';
import { Doctor } from '../../health_adapter/dist/src/doctor.model';
export declare const AdminModelAdminBroProperties: {
    hashedPassword: {
        isVisible: boolean;
    };
    password: {
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
        name: string;
        position: number;
    };
    identifier: {
        isId: boolean;
        position: number;
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    firstName: {
        name: string;
        position: number;
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    email: {
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
};
export declare const DoctorModelAdminBroProperties: {
    speciality: {
        name: string;
        position: number;
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
} & {
    secondName: {
        name: string;
        position: number;
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    firstLastName: {
        name: string;
        position: number;
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    secondLastName: {
        name: string;
        position: number;
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
} & {
    hashedPassword: {
        isVisible: boolean;
    };
    password: {
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
        name: string;
        position: number;
    };
    identifier: {
        isId: boolean;
        position: number;
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    firstName: {
        name: string;
        position: number;
        type: string;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    email: {
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
};
export declare const PacientModelAdminBroProperties: any;
export declare const NoteModelAdminBroProperties: {
    noteId: {
        type: string;
        position: number;
        isId: boolean;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    pacientIdentifier: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    noteDate: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    noteTitle: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    noteText: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
};
export declare const DrugExposureModelAdminBroProperties: {
    drugId: {
        type: string;
        position: number;
        isId: boolean;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    pacientIdentifier: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    startDate: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    endDate: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    drugType: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    daysSupply: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    lotNumber: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
    stopReason: {
        name: string;
        type: string;
        position: number;
        isVisible: {
            list: boolean;
            edit: boolean;
            filter: boolean;
            show: boolean;
        };
    };
};
export declare function hashPassword(request: ActionRequest, context: ActionContext): Promise<ActionRequest>;
export declare function adminAccess(context: ActionContext): boolean;
export declare function doctorAccess(context: ActionContext): boolean;
declare type authentTypes = Doctor | Admin | boolean;
export declare function authentication(email: any, password: any): Promise<authentTypes>;
export {};
