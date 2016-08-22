'use strict';

var controller= require('./_controller');

module.exports = angular.module('Guatuneed.medicinas',[])
				.controller('MedicinaCtrl',['$scope','API',controller]);