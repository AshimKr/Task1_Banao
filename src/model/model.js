const mongoose = require('mongoose');
// const validator = require('validator');
const validator = require('mongoose-validator');
const Schema = mongoose.Schema;

let userData = new Schema({
    username : {
        type : String,
        unique : [true, "UserName must Be unique"],
        required : true,
    },
    email:{
        type : String,
        unique: [true,'email must be unique'],
        required:true,
        validate:[
            validator({
                validator:'isEmail',
                message: 'invalid Email'
            })
        ]
    },
    password:{
        type:Number,
        required : [true, 'password is must']
    }
});






const regnData = mongoose.model("regnData",userData);

module.exports = regnData;