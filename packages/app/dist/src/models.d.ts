import { Model, Sequelize } from 'sequelize';
export declare const sequelize: Sequelize;
export declare class Admin extends Model {
    id: number;
    name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export declare class HealthProffesional extends Model {
    id: number;
    name: string;
    speciality: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export declare class Pacient extends Model {
    id: number;
    name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
