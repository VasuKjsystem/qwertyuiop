var mongoose = require('mongoose');
var applyleavesSchema = new mongoose.Schema(
    {   
        "userid":{type: String, required: true},
        "username":{type: String, required: true},
        "leavetype": {type: String, required: true},
        "leavefrom": {type: String, required: true},
        "leaveto": {type: String, required: true},
        "reason": {type: String, required: true},
        "status": {type: String, default:'pending'},
        "hours":{type: Number},
        "noofdays":{type: String},
        "leavefromdaytype":{type: String},
        "leavetodaytype":{type: String},
        "createdAt": {type: Date, default: Date.now},
        "modifiedAt": {type: Date, default: Date.now},
        "isDeleted": {type: Boolean, default: false}
    }
);
mongoose.model('applyleaves', applyleavesSchema); 