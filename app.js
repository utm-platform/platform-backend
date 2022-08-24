require('dotenv').config();
const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//Requisicion de Usuario
const user = require('./models/teacher')
//

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
require ('./database');
require('./routes')(app);

//si existe un puerto en .env se tomara ese, si no se tomara por defecto 3000
app.set('port', process.env.PORT || 3000);

//middleware
app.use(cors());
app.use(express.json());

//Para ver puerto ir a .env
app.listen(app.get('port'));
    console.log('App listening on port', app.get('port'));
