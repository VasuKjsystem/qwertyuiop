var mongoose = require('mongoose');
var departments = mongoose.model('departments');

module.exports = (function(){
    return{
        newDepartment: function(request,response){
            departments.findOne({department: request.params.department}, function(err,res){
                if(err){
                    response.send(err);
                    console.log(err);
                }
                else{
                    if(res==null){
                        var department = new departments(request.body);
                        department.save(function(error,result){
                            if(error){
                                response.send(error)
                                console.log(error)
                            }
                            else{
                                response.json(result)
                            }
                        });
                    }
                    else{
                        response.send({'status': 'Already Exists'})
                    }
                }
            });
        },
        allDepartments: function(request,response){
            departments.find({},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        getDepartments: function(request,response){
            departments.find({"designationid": request.params.designationid},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        updateDepartment:function(request,response){
              departments.findById({"_id":request.params.id},function(error,result){
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
        deleteDepartment:function(request,response){
            departments.remove({"_id":request.params.id},function(error,result){
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