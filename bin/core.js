#! /usr/bin/env node

var userArgs = process.argv.splice(2);
var searchPattern = userArgs[0];
var npm = require('npm');


var exec = require('child_process').exec;
var child = exec('ls -a | grep ' + searchPattern, function(err, stdout, stderr){
	npm.load(function(er){
		if(er) console.log(er);
		npm.commands.install([searchPattern], function(er, data){
			if(er) console.log(er);
		})
		npm.registry.log.on('log', function(message){})
	})
});