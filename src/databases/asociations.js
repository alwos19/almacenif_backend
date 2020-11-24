const User = require('./models/Users');
const Rol = require('./models/Roles');
const Dependencia = require('./models/Dependencias');
const Activo = require('./models/Activos');
const Estado = require('./models/Estados');
const Aula = require('./models/Aulas');
const Horario = require('./models/Horarios');

// Un rol - Muchos usuarios
Rol.hasMany(User, { as: "usuarios", foreignKey: "rolId" });
User.belongsTo(Rol, { as: "rol" });

//Una Dependencia - Muchos usuarios
Dependencia.hasMany(User, { as: "usuarios", foreignKey: "dependenciaId" });
User.belongsTo(Dependencia, { as: "dependencia" });

//Una Aula - Muchos usuarios
Aula.hasMany(User, { as: "usuarios", foreignKey: "aulaId" })
User.belongsTo(Aula, { as: "aula" });

//Una Aula - Muchos Activos
Aula.hasMany(Activo, { as: "activos", foreignKey: "aulaId" })
Activo.belongsTo(Aula, { as: "aula" });

//Muchos Activos - Muchos Usuarios
User.belongsToMany(Activo, { through: "user_por_activo" });
Activo.belongsToMany(User, { through: "user_por_activo" });

//Muchos Activos - Muchos Estados
Activo.belongsToMany(Estado, { through: "activo_por_estado" });
Estado.belongsToMany(Activo, { through: "activo_por_estado" });

//Muchos Activos - Muchos Horarios
Activo.belongsToMany(Horario, { through: "activo_por_horario" });
Horario.belongsToMany(Activo, { through: "activo_por_horario" });