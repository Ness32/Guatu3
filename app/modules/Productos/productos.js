'use strict';

var controller= require('./_controller');

module.exports = angular.module('Guatuneed.productos',[])
				.controller('ProductosCtrl',['$scope','API',controller]);