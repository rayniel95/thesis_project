"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});
class Admin extends sequelize_1.Model {
}
exports.Admin = Admin;
class HealthProffesional extends sequelize_1.Model {
}
exports.HealthProffesional = HealthProffesional;
class Pacient extends sequelize_1.Model {
}
exports.Pacient = Pacient;
Admin.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
}, {
    tableName: 'admins',
    sequelize: exports.sequelize
});
HealthProffesional.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    speciality: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: 'proffesionals',
    sequelize: exports.sequelize
});
Pacient.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
}, {
    tableName: 'pacients',
    sequelize: exports.sequelize
});
//# sourceMappingURL=models.js.map