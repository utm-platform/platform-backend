'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = Schema({
    tid: Number,
    tname: String,
    username: String,
    email: String
})
module.exports=mongoose.model('user', teacherSchema)