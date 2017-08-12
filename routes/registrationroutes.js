var registerCtrl = require('../controllers/registercontroller.js');
module.exports = function(app){
    //Users
    app.post('/collegeAdminstration/registers', function(request,response){
        registerCtrl.newRegistration(request,response)
    });
     app.delete('/collegeAdminstration/registers/:id', function(request,response){
        registerCtrl.deleteRegister(request,response)
    });
    app.put('/collegeAdminstration/changepassword/', function(request,response){
        registerCtrl.changePassword(request,response)
    });
    app.get('/collegeAdminstration/registers', function(request,response){
        registerCtrl.getAllUsers(request,response)
    });
}





