var mongoose = require('mongoose');

var portSchema = new mongoose.Schema({
    "port": String,
    "username": String,
    "PcName": String,
    "YuMing": String,
    "URL": String,
    "description": String
});

module.exports = mongoose.model("ports", portSchema);