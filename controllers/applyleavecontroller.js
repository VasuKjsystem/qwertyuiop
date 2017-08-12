var mongoose = require('mongoose');
var applyleaves = mongoose.model('applyleaves');

module.exports = (function(){
    return{
        newLeave: function(request,response){

                        var applyleave = new applyleaves(request.body);
                        applyleave.save(function(error,result){
                            if(error){
                                response.send(error)
                                console.log(error)
                            }
                            else{
                                response.json(result)
                            }
                        });
                 
        },
        allLeaves: function(request,response){
            applyleaves.find({},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        getUserLeaves: function(request,response){
            applyleaves.find({"userid": request.params.userid},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
            })
        },
        updateLeave:function(request,response){
              applyleaves.findById({"_id":request.params.id},function(error,result){
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
        }/*,
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
        }*/
    }
})();



