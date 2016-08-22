'use strict';
//
//	Dependecies Load
//
var util = require('../util');
var queryString = require('query-string');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var helmet = require('helmet');
var csrf = require('csurf');
var done = false;
var multipart = require('connect-multiparty');
var flash = require('connect-flash');
var session = require('express-session');
//
//	Module Export
//
module.exports = function(express, server){

	//
	//	Global Instances
	//
	global._util = util;

	//
	//	Express Setup
	//
	server.use(cors());
	server.use(morgan('combined'));
	server.use(cookieParser());
	server.use(require('connect-livereload')({port: 4002}));

	// Aplicacion parse JSON
	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({extended: true}));
	server.use(session({secret: '039c383f760b8ae9388f1bfc3c28e9e2'}));
	
	// Set views and public dir
	server.set('views', __dirname + '/tpl');
	server.set('view engine', 'jade');
	server.set('port', process.env.PORT || _util.CONFIG.PORT);

	// Helmet
	var csfrValue = function(req){
		var token = (req.body && req.csrfToken())
			||	(req.query && req.query._csrf)
			||	(req.headers['x-csrf-token'])
			||	(req.headers['x-xsrf-token']);
		return token;
	};

	//
	//	Image Upload
	//

	//
	//	Security
	//
	server.use(helmet.hidePoweredBy({
		setTo: 'ruby on rails'
	}));

	server.use(csrf({value: csfrValue}));
	server.use(function(req, res, next){
		res.cookie('XSRF-TOKEN', req.csrfToken());
		next();
	});

	//
	//	Components Load
	//
	require('./modules/load.js')(express, server);

	//
	//	Static Content
	//
	server.use(express.static(util.PROJECT_DIR + '/www'));

	//
	//	ENV
	//
	if (util.CONFIG.ENV === 'dev') {
		server.use(function(err, req, res, next){
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err
			});
		});
	};

	// Production Error Handler
	server.use(function(err, req, res, next){
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			err: {}
		});
	});

	//
	//	Server Init
	//
	http.createServer(server).listen(server.get('port'), function(){
		console.log('Cartelera server created on port ' + server.get('port'));
	});
};