const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const sequelize = require('./src/databases/db');

//Middlewears
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(require('./src/routes/users'));

app.listen(7000, () => {
    console.log('listen on port 7000');
});

sequelize.sync({ force: true }).then(() => {
    console.log('conect to data base')
}).catch(error => {
    console.log('Error DB conect', error);
});