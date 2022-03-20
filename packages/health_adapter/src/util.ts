import Client from 'fabric-client';
import {Gateway, GatewayOptions} from 'fabric-network'
import { emit } from 'process';


export type ConnectionProfileType = string|object|Client
//? how can i declare a method that can be redefined with user selected parameters?
export class Model {
    protected gateway: Gateway
    protected connProfile: ConnectionProfileType
    protected connOptions: GatewayOptions

    constructor(connProfile: ConnectionProfileType, 
        connOptions: GatewayOptions) {
        
        this.gateway = new Gateway()
        this.connProfile = connProfile
        this.connOptions = connOptions
    }

    public async create<T>(type: {new(...parameters): T}, ...params: string[]): Promise<T> {
        try {
            await this.gateway.connect(this.connProfile, this.connOptions)
            const healthChannel = await this.gateway.getNetwork('ch1')
            const health = healthChannel.getContract('health') 

            const note = await health.submitTransaction(
                'health_create'.concat(type.name), ...params
            )
            this.gateway.disconnect()

            return new type(JSON.parse(note.toString()))
        } catch(error) {
            //todo
            console.log(error)
            return null
        }
    }

    public async getOne<T>(type: {new(...params): T}, identifier:number): Promise<T> {
        try {
            await this.gateway.connect(this.connProfile, this.connOptions)
            
            const network = await this.gateway.getNetwork('ch1')
            const contract = network.getContract('health')
            const result = await contract.evaluateTransaction(
                'health_getOne'.concat(type.name), identifier.toString())

            this.gateway.disconnect()
            return new type(JSON.parse(result.toString()))
        } catch (error) {
            console.log(error)
            return null
        }
    }

    public async getAll<T>(type: {new(...params): T}): Promise<T[]> {
        try {
            await this.gateway.connect(this.connProfile, this.connOptions)
            //todo change channel name
            const network = await this.gateway.getNetwork('ch1')
            const contract = network.getContract('health')
            const result = await contract.evaluateTransaction(
                'health_getAll'.concat(type.name))
            this.gateway.disconnect()
            return JSON.parse(result.toString()).map((properties) => new type(properties))

        } catch (error) {
            console.log(error)
            return null
        }
    }

    public async getOwnerSome<T, T1>(
        type: {new(...params): T}, 
        type1: {new(...params): T1}, 
        ownerId: number
    ): Promise<T1[]> {
        try {
            await this.gateway.connect(this.connProfile, this.connOptions)
            
            const network = await this.gateway.getNetwork('ch1')
            const contract = network.getContract('health')

            const result = await contract.evaluateTransaction(
                'health_get'.concat(type.name).concat(type1.name), ownerId.toString())
            
            this.gateway.disconnect()
            return JSON.parse(result.toString()).map((properties) => new type1(properties))

        } catch (error) {
            console.log(error)
            return null
        }
    }

    public async getOneByEmail<T>(type: {new(...params): T}, email: string): Promise<T> {
        try {
            await this.gateway.connect(this.connProfile, this.connOptions)
            
            const network = await this.gateway.getNetwork('ch1')
            const contract = network.getContract('health')

            const result = await contract.evaluateTransaction(
                'health_getOne'.concat(type.name).concat('ByEmail'), email)
            
            this.gateway.disconnect()
            return new type(JSON.parse(result.toString()))

        } catch (error) {
            console.log(error)
            return null
        }
    }
}

