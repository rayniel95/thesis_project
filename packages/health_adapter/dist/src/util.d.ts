import Client from 'fabric-client';
import { Gateway, GatewayOptions } from 'fabric-network';
export declare type ConnectionProfileType = string | object | Client;
export declare class Model {
    protected gateway: Gateway;
    protected connProfile: ConnectionProfileType;
    protected connOptions: GatewayOptions;
    constructor(connProfile: ConnectionProfileType, connOptions: GatewayOptions);
    create<T>(type: {
        new (...parameters: any[]): T;
    }, ...params: string[]): Promise<T>;
    getOne<T>(type: {
        new (...params: any[]): T;
    }, identifier: number): Promise<T>;
    getAll<T>(type: {
        new (...params: any[]): T;
    }): Promise<T[]>;
    getOwnerSome<T, T1>(type: {
        new (...params: any[]): T;
    }, type1: {
        new (...params: any[]): T1;
    }, ownerId: number): Promise<T1[]>;
    getOneByEmail<T>(type: {
        new (...params: any[]): T;
    }, email: string): Promise<T>;
}
