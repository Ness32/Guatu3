'use sticts'

var  DeportesCtrl = function($scope,API){
	var _this =$scope;
	this.DOM(_this);
	this.showData(_this,API);
};
	DeportesCtrl.prototype.DOM = function(_this){
		_this.title ='Deportes';
	};
		DeportesCtrl.prototype.showData = function(_this,API){
			_this.cats=[];
			API.getDeportes().success(function (results){
				_this.contador=results.length;
				for (var i = 0; i < results.length; i++) {
					_this.cats.push(results[i]);
				};
			});
		};
module.exports = DeportesCtrl;