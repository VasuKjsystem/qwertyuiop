var mongoose = require('mongoose');
var leavetypes = mongoose.model('leavetypes');

module.exports = (function(){
    return{
        newLeavetype: function(request,response){
            leavetypes.findOne({leavetype: request.params.leavetype}, function(err,res){
                if(err){
                    response.send(err);
                    console.log(err);
                }
                else{
                    if(res==null){
                        var leave = new leavetypes(request.body);
                        leave.save(function(error,result){
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
        allLeavetypes: function(request,response){
            leavetypes.find({},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        updateLeavetype:function(request,response){
              leavetypes.findById({"_id":request.params.id},function(error,result){
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
        deleteLeavetype:function(request,response){
            leavetypes.remove({"_id":request.params.id},function(error,result){
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