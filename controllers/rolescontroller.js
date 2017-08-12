var mongoose = require('mongoose');
var roles = mongoose.model('roles');

module.exports = (function(){
    return{
        newRole: function(request,response){
            var role = new roles(request.body);
            role.save(function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        allRoles: function(request,response){
            roles.find({},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        updateRole:function(request,response){
              roles.findById({"_id":request.params.id},function(error,result){
                  if(error){
                      response.send(error)
                  }
                  else{
                      for(prop in request.body){                          
                          result[prop] = request.body[prop]                    
                    }
                      result.save(function(error,data){
                          if(error){
                              response.send(error)
                              console.log(error)
                          }
                          else{
                              response.json(result)
                          }
                      })
                  }
              })
        },
        deleteRole:function(request,response){
            roles.remove({"_id":request.params.id},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
                    
            })
        }
    }
})();