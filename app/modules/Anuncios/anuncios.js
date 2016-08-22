'use strict';

var controller = require('./_controller');

module.exports = angular.module('Guatuneed.anuncios',[])
				 .controller('AnunciosCtrl',['$scope','anuncios',controller]);