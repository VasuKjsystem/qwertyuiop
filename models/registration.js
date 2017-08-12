var mongoose = require('mongoose');
var registrationsSchema = new mongoose.Schema(
    {
        "firstname": {type: String},
        "lastname": {type: String},
        "department": {type: String},
        "mobile": {type: String},
        "role":{type: String},
        "email": {type: String},
        "bloodgroup":{type: String},
        "address":{
        "address": {type: String},
        "city": {type: String},
        "pinno": {type: String}  
        },
        "userid": {type: String, required: true},
        "password": {type: String, required: true},
        "createdAt": {type: Date, default: Date.now},
        "modifiedAt": {type: Date, default: Date.now},
        "isDeleted": {type: Boolean, default: false},
    }
);
mongoose.model('registrations', registrationsSchema);