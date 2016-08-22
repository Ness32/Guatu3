'use strict';
var  EntretenimientoCtrl = function($scope,API){
	var _this = $scope;
	this.DOM(_this);
	this.showData(_this, API);
};

	EntretenimientoCtrl.prototype.DOM = function(_this){
		_this.title='Entretenimiento';
	};
		EntretenimientoCtrl.prototype.showData = function(_this,API){
			_this.cats=[];
			API.getEntretenimiento().success(function (results){
				_this.contador=results.length;
				for (var i = 0; i < results.length; i++) {
					_this.cats.push(results[i]);
					};
				});
			};
module.exports = EntretenimientoCtrl;