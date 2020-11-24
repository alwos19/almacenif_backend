const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const sequelize = require('./src/databases/db');
require('./src/databases/asociations');

//Middlewears
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(require('./src/routes/users'));
app.use(require('./src/routes/index'));
app.use(require('./src/routes/activos'));
app.use(require('./src/routes/roles'));
app.use(require('./src/routes/dependencias'));
app.use(require('./src/routes/aulas'));
app.use(require('./src/routes/estados'));
app.use(require('./src/routes/horario'));

app.listen(7000, () => {
    console.log('listen on port 7000');
});

sequelize.sync({ force: true }).then(() => {
    console.log('conect to data base')
}).catch(error => {
    console.log('Error DB conect', error);
});