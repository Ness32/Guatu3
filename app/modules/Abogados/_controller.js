'use strict';

var AbogadosCtrl = function($scope, API,$location){
	var _this = $scope;
	
	this.DOM(_this);
	this.showData(_this, API);
};
	AbogadosCtrl.prototype.DOM = function(_this){

		_this.title='Abogados y Notarios';
	};
		AbogadosCtrl.prototype.showData = function(_this,API){

				
			_this.cats=[];
			API.getAbogados().success(function (results){
				_this.contador=results.length;				
				for (var i = 0; i < results.length; i++) {
					_this.cats.push(results[i]);
					
				};
			});

		};
module.exports = AbogadosCtrl;