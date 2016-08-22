'use strict';

var controller= require('./_controller');

module.exports = angular.module('Guatuneed.vehiculos',[])
				.controller('VehiculosCtrl',['$scope','API',controller]);