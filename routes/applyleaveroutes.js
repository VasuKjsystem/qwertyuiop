var leavectrl = require('../controllers/applyleavecontroller.js');
module.exports = function(app){
    app.post('/applyleave', function(request,response){
        leavectrl.newLeave(request,response)
    });
    app.get('/applyleave', function(request,response){
        leavectrl.allLeaves(request,response)
    });
    app.get('/applyleave/:userid', function(request,response){
        leavectrl.getUserLeaves(request,response)
    });
  
    app.put('/applyleave/:id', function(request,response){
        leavectrl.updateLeave(request,response)
    });
}