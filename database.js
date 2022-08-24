require('dotenv').config();
const mongoose=require('mongoose');

//const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} =process.env;
//const MONGODB_URI=`mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect("mongodb://localhost:27017/teachers", {
})
.then(db => console.log('database connected'))
.catch(err =>console.log(err));