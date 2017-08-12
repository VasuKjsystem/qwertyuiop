var mongoose = require('mongoose');
var designations = mongoose.model('designations');

module.exports = (function(){
    return{
        newDesignation: function(request,response){
            designations.findOne({designation: request.params.designation}, function(err,res){
                if(err){
                    response.send(err);
                    console.log(err);
                }
                else{
                    if(res==null){
                        var designation = new designations(request.body);
                        designation.save(function(error,result){
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
        allDesignations: function(request,response){
            designations.find({},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        getDesignations: function(request,response){
            designations.find({"designationid": request.params.designationid},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        updateDesignation:function(request,response){
              designations.findById({"_id":request.params.id},function(error,result){
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
        deleteDesignation:function(request,response){
            designations.remove({"_id":request.params.id},function(error,result){
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