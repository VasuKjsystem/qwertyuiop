var mongoose    =   require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://collegeapp:collegeapp@ds129183.mlab.com:29183/collegeapp', function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("MongoDB: connection to database successfull");
    }
});

require('../models/roles.js');
require("../models/designations.js")
require("../models/departments.js")
require("../models/leavetypes.js")
require("../models/shifts.js")
require("../models/registration.js")
require("../models/applyleave.js")