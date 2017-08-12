var mongoose = require('mongoose');
var shifts = mongoose.model('shifts');

module.exports = (function(){
    return{
        newShift: function(request,response){
            shifts.findOne({shiftname: request.params.shiftname,shiftfrom:request.params.shiftfrom,shiftto:request.params.shiftto}, function(err,res){
                if(err){
                    response.send(err);
                    console.log(err);
                }
                else{
                    if(res==null){
                        var shift = new shifts(request.body);
                        shift.save(function(error,result){
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
        allShifts: function(request,response){
            shifts.find({},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        updateShift:function(request,response){
              shifts.findById({"_id":request.params.id},function(error,result){
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
        deleteShift:function(request,response){
            shifts.remove({"_id":request.params.id},function(error,result){
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