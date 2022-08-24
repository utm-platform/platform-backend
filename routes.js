'use strict'

const { default: mongoose } = require('mongoose');
const teacher = require('./models/teacher');

module.exports = function(app) {
    const user = require('./models/teacher')
    const cors = require ('cors');
    app.use(cors());
    app.get('/', (request, response) => {
        response.json({"mensaje": "si jala"});
    });

    //GET PARA TODOS LOS USUARIOS
    app.get('/teacher', (req, response) => {
        user.find({}, (error, teachers) => { 
        if (error) return response.status(500).send({message: `Error al realizar la peticion: ${error}`})
        if (!teachers) return response.status(404).send({message:`No existen usuarios`})
    
        response.send(200, {teachers})
    })});

    //GET USUARIO CON UN IDENTIFICADOR
    app.get('/teacher/:teacherId', (request, response) => {
        let teacherId =request.params.teacherId

        user.findById(teacherId, (error, teacher) =>{
            if (error) return response.status(500).send({message: `Error al realizar la peticion: ${error}`})
            if (!teacher) return response.status(404).send({message:`El usuario no existe`})

            response.status(200).send({teacher})
        })
    });

    //POST PARA CREAR USUARIOS
    app.post('/teachers', (request, response) => {
        console.log('POST /teachers')
        console.log(request.body)  

        let teacher = new user()
            teacher.tid = request.body.tid
            teacher.tname = request.body.tname
            teacher.username = request.body.username
            teacher.email = request.body.email
        
            teacher.save((err, userCreated) => {
                if (err)return response.status(500).send({message:`Error al crear usuario: ${ err}`})
                return response.status(200).send({user: userCreated})
            }) 
                

        //return response.json({"mensaje": "Usuario creado"});
    });
};