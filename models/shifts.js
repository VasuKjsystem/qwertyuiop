var mongoose = require('mongoose');
var shiftsSchema = new mongoose.Schema(
    {
        "shiftname": {type: String, required: true},
         "shiftfrom": {type: String, required: true},
         "shiftto": {type: String, required: true},
        "createdAt": {type: Date, default: Date.now},
        "modifiedAt": {type: Date, default: Date.now},
        "isDeleted": {type: Boolean, default: false}
    }
);
mongoose.model('shifts', shiftsSchema); 