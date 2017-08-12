var mongoose = require('mongoose');
var rolesSchema = new mongoose.Schema(
    {
        "role": {type: String, required: true},
        "createdAt": {type: Date, default: Date.now},
        "modifiedAt": {type: Date, default: Date.now},
        "isDeleted": {type: Boolean, default: false}
    }
);
mongoose.model('roles', rolesSchema); 