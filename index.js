const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Middlewears
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

app.listen(7000, () => {
    console.log('listen on port 7000');
})