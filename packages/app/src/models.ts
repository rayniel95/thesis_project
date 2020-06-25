import {Model, Sequelize, DataTypes} from 'sequelize'


export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });
//todo hacer una interfaz que tenga los campos comunes
// todo extender los campos, poner esto mas curioso
export class Admin extends Model {
    public id!: number
    public name!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export class HealthProffesional extends Model {
    public id!: number
    public name!: string
    public speciality!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export class Pacient extends Model {
    public id!: number
    public name!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


Admin.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
      },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
}, {
    tableName: 'admins', 
    sequelize: sequelize
}) 

HealthProffesional.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
      },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    speciality: {
        type: new DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: 'proffesionals', 
    sequelize: sequelize
})

Pacient.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
      },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
}, {
    tableName: 'pacients', 
    sequelize: sequelize
}) 