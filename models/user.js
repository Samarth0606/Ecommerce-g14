const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({

    email:{
        type:String,
        trim:true,
        required:true
    },
    username:{},
    password:{}
})


userSchema.plugin(passportLocalMongoose);


let User = mongoose.model('User' , userSchema);


module.exports = User;