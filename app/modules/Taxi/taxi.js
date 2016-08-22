'use strict';

var controller= require('./_controller');

module.exports = angular.module('Guatuneed.taxi',[])
				.controller('TaxisCtrl',['$scope','API',controller]);