var mongoose = require('mongoose');
var designationSchema = new mongoose.Schema(
    {
        
        "designation": {type: String, required: true},
        "createdAt": {type: Date, default: Date.now},
        "modifiedAt": {type: Date, default: Date.now},
        "isDeleted": {type: Boolean, default: false}
    }
);
mongoose.model('designations', designationSchema);