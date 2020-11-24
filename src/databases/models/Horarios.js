const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Horario extends Model {}

Horario.init({
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE
}, {
    sequelize,
    modelName: "horarios",
    timestamps: false
});

module.exports = Horario;