var shiftctrl = require('../controllers/shiftcontroller.js');
module.exports = function(app){
    //Users
    app.post('/shift', function(request,response){
        shiftctrl.newShift(request,response)
    });
    app.get('/shift', function(request,response){
        shiftctrl.allShifts(request,response)
    });
    app.delete('/shift/:id', function(request,response){
        shiftctrl.deleteShift(request,response)
    });
    app.put('/shift/:id', function(request,response){
        shiftctrl.updateShift(request,response)
    });
}





