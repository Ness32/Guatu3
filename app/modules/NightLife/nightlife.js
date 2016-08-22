'use strict';

var controller= require('./_controller');

module.exports = angular.module('Guatuneed.nightlife',[])
				.controller('NightlifeCtrl',['$scope','API',controller]);