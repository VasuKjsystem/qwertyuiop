var mongoose = require('mongoose');
var leavetypesSchema = new mongoose.Schema(
    {
        "leavetype": {type: String, required: true},
        "createdAt": {type: Date, default: Date.now},
        "modifiedAt": {type: Date, default: Date.now},
        "isDeleted": {type: Boolean, default: false}
    }
);
mongoose.model('leavetypes', leavetypesSchema); 