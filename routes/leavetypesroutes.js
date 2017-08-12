var leavetypectrl = require('../controllers/leavetypecontroller.js');
module.exports = function(app){
    //Users
    app.post('/leavetype', function(request,response){
        leavetypectrl.newLeavetype(request,response)
    });
    app.get('/leavetype', function(request,response){
        leavetypectrl.allLeavetypes(request,response)
    });
    app.delete('/leavetype/:id', function(request,response){
        leavetypectrl.deleteLeavetype(request,response)
    });
    app.put('/leavetype/:id', function(request,response){
        leavetypectrl.updateLeavetype(request,response)
    });
}




