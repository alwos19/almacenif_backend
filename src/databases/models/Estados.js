const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Estado extends Model {}

Estado.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
}, {
    sequelize,
    modelName: "estados",
    timestamps: false
});

module.exports = Estado;