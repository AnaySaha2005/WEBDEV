const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    email:{
        type:String,
        required:true,
    },

});
//passport automatically defines username and password just use them
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);