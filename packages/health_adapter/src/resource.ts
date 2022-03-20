import AdminBro, { Filter, BaseRecord, BaseProperty } from 'admin-bro'
import { ParamsType } from 'admin-bro/types/src/backend/adapters/base-record'
import { Model } from './util'
import { PacientModel } from './pacientModel'
import { AdminModel } from './adminModel'
import { NoteModel } from './noteModel'
import { DoctorModel } from './doctorModel'
import { DrugExposureModel } from './drugExposureModel'
import { Pacient } from './pacient.model'
import { Doctor } from './doctor.model'
import { DrugExposure } from './drug_exposure.model'
import { Admin } from './admin.model'
import { Note } from './note.model'


export class Resource extends AdminBro.BaseResource {
    protected model: Model
    protected modelsToObj: any[]
    protected models: any[]
    protected modelsToObjName: string[]

    constructor(model: Model) {
        super(model)
        this.model = model
        
        this.models = [
            PacientModel, DrugExposureModel, AdminModel, 
            NoteModel, DoctorModel
        ]

        this.modelsToObj = [
            Pacient, DrugExposure, Admin, Note, Doctor
        ]

        this.modelsToObjName = [
            'Paciente', 'Medicacion', 'Admin', 'Nota', 'Doctor'
        ]
    }

    static isAdapterFor(rawResource: any): boolean {
        return [
            PacientModel, DrugExposureModel, AdminModel, 
            NoteModel, DoctorModel
        ].some((val) => rawResource instanceof val)
    }

    public databaseName(): string { return 'Vida' }

    public name(): string { 
        return  this.modelsToObjName[
            this.models.findIndex(
                (value)=> this.model instanceof value
            )
        ]
    }

    public id(): string { return this.name().toLowerCase() }
    // ! if we use fabric native properties was getter methods capable read without
    // ! class instantiation
    public properties(): BaseProperty[] {
        if (this.model instanceof AdminModel) {
            return [
                new AdminBro.BaseProperty({path: 'identifier', isId: true}), 
                new AdminBro.BaseProperty({path: 'firstName'}), 
                new AdminBro.BaseProperty({path: 'email'}), 
                new AdminBro.BaseProperty({path: 'hashedPassword'})
            ]
        }
        else if (this.model instanceof PacientModel) {
            return [
                new AdminBro.BaseProperty({path: 'identifier', isId: true}), 
                new AdminBro.BaseProperty({path: 'dayOfBirth'}), 
                new AdminBro.BaseProperty({path: 'monthOfBirth'}), 
                new AdminBro.BaseProperty({path: 'yearOfBirth'}), 
                new AdminBro.BaseProperty({path: 'sex'}), 
                new AdminBro.BaseProperty({path: 'race'})
            ]
        }
        else if(this.model instanceof DrugExposureModel) {
            return [
                new AdminBro.BaseProperty({path: 'drugId', isId: true}),
                new AdminBro.BaseProperty({path: 'pacientIdentifier'}), 
                new AdminBro.BaseProperty({path: 'startDate'}), 
                new AdminBro.BaseProperty({path: 'endDate'}), 
                new AdminBro.BaseProperty({path: 'drugType'}), 
                new AdminBro.BaseProperty({path: 'stopReason'}), 
                new AdminBro.BaseProperty({path: 'daysSupply'}), 
                new AdminBro.BaseProperty({path: 'lotNumber'})
            ]
        }
        else if (this.model instanceof NoteModel) {
            return [
                new AdminBro.BaseProperty({path: 'noteId', isId: true}), 
                new AdminBro.BaseProperty({path: 'pacientIdentifier'}), 
                new AdminBro.BaseProperty({path: 'noteDate'}), 
                new AdminBro.BaseProperty({path: 'noteTitle'}), 
                new AdminBro.BaseProperty({path: 'noteText'})
            ]
        }
        return [
            new AdminBro.BaseProperty({path: 'identifier', isId: true}), 
            new AdminBro.BaseProperty({path: 'firstName'}), 
            new AdminBro.BaseProperty({path: 'secondName'}), 
            new AdminBro.BaseProperty({path: 'firstLastName'}), 
            new AdminBro.BaseProperty({path: 'secondLastName'}), 
            new AdminBro.BaseProperty({path: 'speciality'}), 
            new AdminBro.BaseProperty({path: 'email'}), 
            new AdminBro.BaseProperty({path: 'hashedPassword'})
        ]
    }

    public property(path: string): BaseProperty {
        //?how this property know if it is an id field
        return new AdminBro.BaseProperty({path}) 
    }

    public async create(params: ParamsType): Promise<ParamsType> {
        // params is a kind of dictionary with field name and value
        //! i need a method for unpack params 
        //! params values need validation
        //! for some reason params come with properties names, not with property 
        console.log('inside create')
        console.log(params)

        let result: any //! this is an union type
        if (this.model instanceof PacientModel) {
            result = await this.model.createPacient(
                params['identifier'], params['Dia de nacido'], 
                params['Mes de nacido'], params['Ano de nacido'], 
                params['Sexo'], params['Raza']
            )
            console.log(result)
        }
        else if (this.model instanceof AdminModel) {
        
            result = await this.model.createAdmin(
                params['identifier'], params['Primer Nombre'], params['email'], 
                params['hashedPassword']
            )
            console.log(result)
        }
        else if (this.model instanceof DrugExposureModel) {
            result = await this.model.createDrugExposure(
                params['drugId'], params['Identificador del paciente'], 
                params['Tiempo de comienzo'], params['Tiempo de finalizacion'], 
                params['Tipo de medicamento'], params['Razon de suspension'], 
                params['Cantidad de dias de administracion'], params['Numero del lote']
            )
        }
        else if (this.model instanceof NoteModel) {
            result = await this.model.createNote(
                params['noteId'], params['Identificador del paciente'], 
                params['Fecha'], params['Titulo'], params['Texto']
            )
        }
        else {
            result = await (<DoctorModel>this.model).createDoctor(
                params['identifier'], params['Primer Nombre'], params['Segundo Nombre'], 
                params['Primer Apellido'], params['Segundo Apellido'], params['Especialidad'], 
                params['email'], params['hashedPassword']
            )
        }
        console.log('executed create')
        
        return result
    }

    public async update(id: string, params: ParamsType): Promise<ParamsType> {
        console.log('inside update')
        let result: any
        try {
            result = await this.findOne(id) //! this return base record!!!!!
        }
        catch(error) {
            result = false
        }
        if (result) {return result}
        
        result = await this.create(params)

        console.log('executed update')
        
        return result
    }

    public async delete(id: string) {
        throw Error('NI Error, not implemented delete in resource')
    }
    
    public async count(filter: Filter): Promise<number> {
        console.log('inside count')

        const result = await this.find(filter, {})
        
        console.log('executed count in resource')
        
        return result.length
    }

    public async findOne(id: string): Promise<BaseRecord> {
        console.log('inside findone')
        let result: any
        if (this.model instanceof AdminModel) {
            result = await this.model.getOneAdmin(Number(id))
            console.log('executed findOne')
            return new AdminBro.BaseRecord(
                { // ! this is crazy, wtf with this designer
                    // ! you need to return the properties based in its names
                    'identifier': result.identifier,
                    'Primer Nombre': result.firstName,
                    'email': result.email,
                    'hashedPassword': result.hashedPassword
                },
                this
            )
        }
        else if (this.model instanceof PacientModel) {
            result = await this.model.getOnePacient(Number(id))
            console.log('executed findOne')
            return new AdminBro.BaseRecord(
                {
                    'identifier': result.identifier, 
                    'Dia de nacido': result.dayOfBirth, 
                    'Mes de nacido': result.monthOfBirth, 
                    'Ano de nacido': result.yearOfBirth, 
                    'Sexo': result.sex, 'Raza': result.race
                }, 
                this
            )
        }
        else if (this.model instanceof DrugExposureModel) {
            result = await this.model.getOneDrugExposure(Number(id))
            console.log('executed findOne')
            return new AdminBro.BaseRecord(
                {
                    'drugId': result.drugId, 
                    'Identificador del paciente': result.pacientIdentifier, 
                    'Tiempo de comienzo': result.startDate, 
                    'Tiempo de finalizacion': result.endDate, 
                    'Tipo de medicamento': result.drugType,
                    'Razon de suspension': result.stopReason, 
                    'Cantidad de dias de administracion': result.daysSupply, 
                    'Numero del lote': result.lotNumber
                }, 
                this
            )
        }
        else if (this.model instanceof NoteModel) {
            result = await this.model.getOneNote(Number(id))
            console.log('executed findOne')
            return new AdminBro.BaseRecord(
                {
                    'noteId': result.noteId, 
                    'Identificador del paciente': result.pacientIdentifier, 
                    'Fecha': result.noteDate, 'Titulo': result.noteTitle, 
                    'Texto': result.noteText
                }, 
                this
            )
        }
        
        result = await (<DoctorModel>this.model).getOneDoctor(Number(id))
        console.log('executed findOne')
        return new AdminBro.BaseRecord(
            {
                'identifier': result.identifier, 'Primer Nombre': result.firstName, 
                'Segundo Nombre': result.secondName, 
                'Primer Apellido': result.firstLastName, 
                'Segundo Apellido': result.secondLastName, 
                'Especialidad': result.speciality, 'email': result.email,
                'hashedPassword': result.hashedPassword
            }, 
            this
        )
    }
    //todo show like references pacient notes and pacient drugs
    public async find(filter: Filter, 
        {limit = 20, offset = 0, sort = {}}): Promise<BaseRecord[]> {
        // todo let find by pacient id in note and drugs
        const {direction, sortBy} = sort as any;
        console.log('inside find')

        let result: any[]
        if (this.model instanceof AdminModel) {
            result = await this.model.getAllAdmins()
            console.log('executed find')
            return result.map((value: Admin)=> new AdminBro.BaseRecord(
                { 
                    'identifier': value.identifier,
                    'Primer Nombre': value.firstName,
                    'email': value.email,
                    'hashedPassword': value.hashedPassword
                },
                this
            ))
        }
        else if (this.model instanceof PacientModel) {
            result = await this.model.getAllPacients()
            console.log('executed find')
            return result.map((value: Pacient)=> new AdminBro.BaseRecord(
                {
                    'identifier': value.identifier, 
                    'Dia de nacido': value.dayOfBirth, 
                    'Mes de nacido': value.monthOfBirth, 
                    'Ano de nacido': value.yearOfBirth, 
                    'Sexo': value.sex, 'Raza': value.race
                }, 
                this
            ))
        }
        else if (this.model instanceof DrugExposureModel) {
            result = await this.model.getAllDrugsExposures()
            console.log('executed find')
            return result.map((value: DrugExposure)=> new AdminBro.BaseRecord(
                {
                    'drugId': value.drugId, 
                    'Identificador del paciente': value.pacientIdentifier, 
                    'Tiempo de comienzo': value.startDate, 
                    'Tiempo de finalizacion': value.endDate, 
                    'Tipo de medicamento': value.drugType,
                    'Razon de suspension': value.stopReason, 
                    'Cantidad de dias de administracion': value.daysSupply, 
                    'Numero del lote': value.lotNumber
                }, 
                this
            ))
        }
        else if (this.model instanceof NoteModel) {
            result = await this.model.getAllNotes()
            console.log('executed find')
            return  result.map((value: Note)=> new AdminBro.BaseRecord(
                {
                    'noteId': value.noteId, 
                    'Identificador del paciente': value.pacientIdentifier, 
                    'Fecha': value.noteDate, 'Titulo': value.noteTitle, 
                    'Texto': value.noteText
                }, 
                this
            ))
        }

        result = await (<DoctorModel>this.model).getAllDoctors()
        console.log('executed find')
        return result.map((value: Doctor)=> new AdminBro.BaseRecord(
            {
                'identifier': value.identifier, 'Primer Nombre': value.firstName, 
                'Segundo Nombre': value.secondName, 
                'Primer Apellido': value.firstLastName, 
                'Segundo Apellido': value.secondLastName, 
                'Especialidad': value.speciality, 'email': value.email,
                'hashedPassword': value.hashedPassword
            }, 
            this
        ))
    }
}