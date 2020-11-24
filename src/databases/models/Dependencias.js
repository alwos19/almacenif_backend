const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Dependencia extends Model {}

Dependencia.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
}, {
    sequelize,
    modelName: "dependencias",
    timestamps: false
});

module.exports = Dependencia;