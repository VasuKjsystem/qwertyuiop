var departmentctrl = require('../controllers/departmentscontroller.js');
module.exports = function(app){
    app.post('/department', function(request,response){
     
        departmentctrl.newDepartment(request,response)
    });
    app.get('/department', function(request,response){
        departmentctrl.allDepartments(request,response)
    });
    app.get('/department/:departmentid', function(request,response){
        departmentctrl.getDepartments(request,response)
    });
    app.delete('/department/:id', function(request,response){
        designationctrl.deleteDepartment(request,response)
    });
    app.put('/department/:id', function(request,response){
        departmentctrl.updateDepartment(request,response)
    });
}


