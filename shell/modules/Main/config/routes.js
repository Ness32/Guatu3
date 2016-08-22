'use strict';
var express = require('express');
var routes = express.Router();

routes.get('/', function(req, res){
	res.sendFile('index.html', {root: 'www'});
});

module.exports = routes;