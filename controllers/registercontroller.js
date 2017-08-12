var mongoose = require('mongoose');
var registrations = mongoose.model('registrations');
var nodemailer = require("nodemailer");

module.exports = (function(){
    return{
        newRegistration: function(request,response){
             registrations.findOne({"userid":request.body.userid},function(error,result){
                  if(error){
                      response.send(error)
                  }
                 else{
                    if(result==null){
                               var register = new registrations(request.body);
                                register.save(function(error,result){
                                if(error){
                                    response.send(error)
                                    console.log(error)
                                }
                                else{
                                    response.json({"status":"Registration Successful"})
                                }
                                }) 
                       
                    }
                    else{
                           response.send({'status': 'User Alreddy Exist'});
                        }
                    }
                    })
  
        },
        changePassword:function(request,response){
            if(request.body.oldpassword==request.body.newpassword){
                response.json({"status":"New Paasword and Old Password Should Not be Equal"})
            }
            else{
              registrations.findOne({"userid":request.body.userid},function(error,result){
                  if(error){
                      response.send(error)
                  }
                  else{
                     if(result==null){
                         response.json({"status":"Invalid User id"}) 
                     }
                      else{
                        if(result.oldpassword==request.body.password){
                           result.password=request.body.newpassword
                            result.save(function(error,data){
                          if(error){
                              response.send(error)
                              console.log(error)
                          }
                          else{
                              console.log(data)
                              response.json({"status":"your Password Changed Successfully"})
                          }
                      })
                        }  
                      }
               
                  }
              })
            }
        },
        deleteRegister:function(request,response){
            registrations.remove({"_id":request.params.id},function(error,result){
                if(error){
                    response.send(error)
                    console.log(error)
                }
                else{
                    response.json(result)
                }
                    
            })
        },
         getAllUsers:function(request,response){
            registrations.find({},function(error,result){
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



