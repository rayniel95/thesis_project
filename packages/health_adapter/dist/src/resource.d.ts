import AdminBro, { Filter, BaseRecord, BaseProperty } from 'admin-bro';
import { ParamsType } from 'admin-bro/types/src/backend/adapters/base-record';
import { Model } from './util';
export declare class Resource extends AdminBro.BaseResource {
    protected model: Model;
    protected modelsToObj: any[];
    protected models: any[];
    protected modelsToObjName: string[];
    constructor(model: Model);
    static isAdapterFor(rawResource: any): boolean;
    databaseName(): string;
    name(): string;
    id(): string;
    properties(): BaseProperty[];
    property(path: string): BaseProperty;
    create(params: ParamsType): Promise<ParamsType>;
    update(id: string, params: ParamsType): Promise<ParamsType>;
    delete(id: string): Promise<void>;
    count(filter: Filter): Promise<number>;
    findOne(id: string): Promise<BaseRecord>;
    find(filter: Filter, { limit, offset, sort }: {
        limit?: number;
        offset?: number;
        sort?: {};
    }): Promise<BaseRecord[]>;
}
