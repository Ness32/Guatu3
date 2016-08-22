'use strict';

var menuTrigger = require('./directives/menuTrigger');
var API = require('./factories/api');
var menuScroll= require('./directives/menuScroll');
var video = require('./directives/video');
var anuncios = require('./factories/anuncios');
var Barra = require('./directives/barrahome').barra;
var barra = new Barra();
var Clase = require('./directives/clasemovil').clase;
var clase = new Clase();
var contacto = require('./directives/contactos');
var clear = require('./directives/clearseach');
var menuMobile = require('./directives/menumobile');
var openSearch = require('./directives/opensearch');



module.exports = angular.module('GuatUneed.global', [])
	.factory('API',['$http','$stateParams',API])
	.factory('anuncios',['$http','$stateParams',anuncios])
	.directive('menuTrigger', menuTrigger)
	.directive('video',video)
	.directive('contactos',contacto)
	.directive('menuScroll',menuScroll)
	.directive('clearsearch',clear)
	.directive('menumobile',menuMobile)
	.directive('opensearch',openSearch)	
	.controller('System',['$rootScope','$scope','$state','$location',function($rootScope,$scope,$state,$location){
		
		
		
		if ($location.path()=="/") {
				barra.poner("poner");
		} else{
			barra.quitar();
		}; 
		$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState,fromParams){
					if (toState.name=="main.home") {

						barra.poner("poner");
					}else{
						barra.quitar();				
					};	
			})
	}])



	.controller('Systemovil',['$rootScope','$scope','$state','$location',function($rootScope,$scope,$state,$location){
		if ($location.path()=="/abogados") {
				clase.agregar();
		} else{
			clase.remover();
		};
		$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState,fromParams){
					if (toState.name=="main.abogados") {

						clase.agregar();
					}else{
						clase.remover();				
					};	
			}) 

	}]);

