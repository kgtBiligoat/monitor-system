var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    "userName": String,
    "dataBaseName": String,
    "data": String
});

module.exports = mongoose.model("dataShcemas",dataSchema);