var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var app = express();
var server = require('http').Server(app);


app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(cors());
require('./config/mongo.js');
var roles = mongoose.model('roles');
var registrations = mongoose.model('registrations');
var registerCtrl = require('./controllers/registercontroller.js');
var rolectrl = require('./controllers/rolescontroller.js');

app.get('/',function(request,response){
   response.send('Welcome to College Adminstration');
});
var config = require('./token');
app.set('superSecret', config.secret);
app.post('/collegeAdminstration/registers', function(request,response){
    registerCtrl.newRegistration(request,response)
    
});
app.post('/collegeAdminstration/login', function(request,response){
    console.log(request)
    registrations.findOne({"email": request.body.email}, function(error,result){
        if(error){
            response.send(error);
            console.log(result);
        }
        else{
            if(result==null){
                response.send({'status': 'Invalid username'});
            }
            else if(result.password==request.body.password){
                
                            var token = jwt.sign({"username": result.userid}, app.get('superSecret'), {
                                expiresIn: 3600
                            });
                            response.json({
                                success: true,
				                message: 'Enjoy your token!',
                                name: result.firstname,
                                userid: result.userid,
				                token: token,
                                id:result._id
				            }); 
                     
            }
            else{
                response.send({'status': 'Invalid Login Credentials'});
            }
        }
    });
});

app.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['token'];
	// decode token
	if (token) {
	   // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
			    return res.json({ success: false, message: 'Session Expired Please Login Again.' });		
			} else {
			    // if everything is good, save to request for use in other routes
			    req.decoded = decoded;
                //console.log(decoded);
			    next();
			}
        });
    } else {
	   // if there is no token
	   // return an error
	   return res.status(403).send({ 
           success: false, 
           message: 'No token provided.'
       });
    }
});

require('./routes/rolesroutes.js')(app);
require('./routes/designationsroutes.js')(app);
require('./routes/departmentsroutes.js')(app);
require('./routes/leavetypesroutes.js')(app);
require('./routes/shiftsroutes.js')(app);
require('./routes/registrationroutes.js')(app);
require('./routes/applyleaveroutes.js')(app);
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.originalname /*+'.' + file.originalname.split('.')[file.originalname.split('.').length -1]*/);
        }
    });
    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
            //console.log(res.ServerResponse);
        });
    });
app.get('/download/:photo', function(req, res){
  var file = __dirname + '/uploads/'+req.params.image;
    res.download(file); // Set disposition and send it.
});
var port = process.env.PORT || 3080;
var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port);
});
var endMongoConnection = function(){
    mongoose.connection.close(function(){
        process.exit(0);
    });
}
process.on('SIGINT', endMongoConnection).on('SIGTERM', endMongoConnection);