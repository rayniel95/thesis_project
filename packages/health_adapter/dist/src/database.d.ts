import AdminBro from 'admin-bro';
import { GatewayOptions, Gateway } from 'fabric-network';
import { ConnectionProfileType } from './util';
import { Resource } from './resource';
interface HealthDatabaseOptions {
    connectionOptions: GatewayOptions;
    connectionProfile: ConnectionProfileType;
}
export declare class Database extends AdminBro.BaseDatabase {
    protected gateway: Gateway;
    protected connProfile: ConnectionProfileType;
    protected connOptions: GatewayOptions;
    static isAdapterFor(database: HealthDatabaseOptions): boolean;
    resources(): Resource[];
    constructor(database: HealthDatabaseOptions);
}
export {};
