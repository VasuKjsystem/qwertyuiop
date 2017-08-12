var rolectrl = require('../controllers/rolescontroller.js');
module.exports = function(app){
    //Users
    app.post('/role', function(request,response){
        rolectrl.newRole(request,response)
    });
    app.get('/role', function(request,response){
        rolectrl.allRoles(request,response)
    });
    app.delete('/role/:id', function(request,response){
        rolectrl.deleteRole(request,response)
    });
    app.put('/role/:id', function(request,response){
        rolectrl.updateRole(request,response)
    });
}