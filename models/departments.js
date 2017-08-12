var mongoose = require('mongoose');
var departmentSchema = new mongoose.Schema(
    {
        
        "department": {type: String, required: true},
        "createdAt": {type: Date, default: Date.now},
        "modifiedAt": {type: Date, default: Date.now},
        "isDeleted": {type: Boolean, default: false}
    }
);
mongoose.model('departments', departmentSchema);