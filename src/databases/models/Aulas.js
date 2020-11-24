const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Aula extends Model {}

Aula.init({
    nombre: DataTypes.STRING,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE

}, {
    sequelize,
    modelName: "aulas",
    timestamps: false
})

module.exports = Aula;