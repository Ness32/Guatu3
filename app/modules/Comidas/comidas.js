'use strict';

var controller= require('./_controller');

module.exports = angular.module('Guatuneed.comidas',[])
				.controller('ComidasCtrl',['$scope','API',controller]);