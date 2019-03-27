var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "username": String,
    "password": String,
    "sex": String,
    "email": String,
    "phone": String,
    "identity": String,
    "address": String,
    "isSetPort": Boolean
});

module.exports = mongoose.model("users",userSchema);
