'use strict';
module.exports = function(express, server){
	var main_routes = require('./config/routes');

	server.use('/', main_routes);
}