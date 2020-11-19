const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../db');

class Rol extends Model {}

Rol.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
},{
    sequelize,
    modelName: "rol",
    timestamps: false
});

module.exports = Rol;