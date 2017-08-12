var designationctrl = require('../controllers/designationscontroller.js');
module.exports = function(app){
    app.post('/designation', function(request,response){
        console.log("hai")
        designationctrl.newDesignation(request,response)
    });
    app.get('/designation', function(request,response){
        designationctrl.allDesignations(request,response)
    });
    app.get('/designation/:districtid', function(request,response){
        designationctrl.getDesignations(request,response)
    });
    app.delete('/designation/:id', function(request,response){
        designationctrl.deleteDesignation(request,response)
    });
    app.put('/designation/:id', function(request,response){
        designationctrl.updateDesignation(request,response)
    });
}


