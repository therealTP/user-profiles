// third party modules
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

// internal modules
var config = require('./config');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

// module options
var corsOptions = {
	origin: 'http://localhost:2000'
};

var sessionOptions = config;

// initialize app
var app = express();
var port = 2000;
app.listen(port, function() {
  console.log("listening on port", port);
});

// set up app-wide middleware (all requests will go through these)
app.use(express.static(__dirname + '/public')); // serves up front end files
app.use(cors(corsOptions)); // can also be used only for specific routes, passed in before route method
app.use(bodyParser.json());
app.use(session(sessionOptions));
app.use(function(req, res, next) {
  console.log(req.session);
  next();
});

// routes
app.post('/api/login', userCtrl.login);
app.get('/api/friends', profileCtrl.getFriendsForCurrUser);
