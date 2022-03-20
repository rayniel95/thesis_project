import AdminBro from 'admin-bro'
import {GatewayOptions, Gateway} from 'fabric-network'
import {ConnectionProfileType} from './util'
import {Resource} from './resource'
import { AdminModel } from './adminModel'
import { DoctorModel } from './doctorModel'
import { PacientModel } from './pacientModel'
import { NoteModel } from './noteModel'
import { DrugExposureModel } from './drugExposureModel'


interface HealthDatabaseOptions {
    connectionOptions: GatewayOptions
    connectionProfile: ConnectionProfileType
}

export class Database extends AdminBro.BaseDatabase {
    protected gateway: Gateway
    protected connProfile: ConnectionProfileType
    protected connOptions: GatewayOptions

    public static isAdapterFor(
        database: HealthDatabaseOptions
    ): boolean {
        
        throw new Error('NI Error, not implemented isAdapterFor in database')
    }

    public resources(): Resource[] {
        return [
            new Resource(new AdminModel(this.connProfile, this.connOptions)),
            new Resource(new DoctorModel(this.connProfile, this.connOptions)),
            new Resource(new PacientModel(this.connProfile, this.connOptions)),
            new Resource(new NoteModel(this.connProfile, this.connOptions)),
            new Resource(new DrugExposureModel(this.connProfile, this.connOptions))
        ]
    }

    constructor(database: HealthDatabaseOptions) {
        super(database)
    }
}