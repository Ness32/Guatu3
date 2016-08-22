'use strict';

var controller= require('./_controller');

module.exports = angular.module('Guatuneed.single',[])
				.controller('SingleCtrl',['$scope','API',controller]);