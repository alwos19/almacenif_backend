const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Activo extends Model {}

Activo.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
}, {
    sequelize,
    modelName: "activo",
    timestamps: false
});

module.exports = Activo;