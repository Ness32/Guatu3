'use strict';

var controller = require('./_controller');

module.exports =  angular.module('Guatuneed.contacto',[])
				  .controller('ContactoCtrl',['$scope','API','$mdToast','$mdDialog',controller]);