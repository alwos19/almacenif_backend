const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Rol extends Model {}

Rol.init({
    rol: DataTypes.STRING,
    descripcion: DataTypes.STRING
}, {
    sequelize,
    modelName: "roles",
    timestamps: false
});

module.exports = Rol;