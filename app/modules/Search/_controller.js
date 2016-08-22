'use strict';
var  SearchCtrl = function($rootScope,$scope, API){
var _this = $scope;
	_this.busquedas =[];
	API.getSearch().success(function (results){
	for (var i = 0; i < results.length; i++) {
		_this.busquedas.push(results[i]);
		};
	});
	
};
module.exports = SearchCtrl;