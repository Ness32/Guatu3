'use strict';
var GobiernoCtrl = function($scope,API){
	var _this = $scope;
	this.DOM(_this);
	this.showData(_this,API);
};
	GobiernoCtrl.prototype.DOM = function (_this){
		_this.title='Gobierno';
	};
		GobiernoCtrl.prototype.showData = function(_this,API){
			_this.cats=[];
			API.getGobierno().success(function (result){
				_this.contador=result.length;
							for (var i = 0; i < result.length; i++) {
								_this.cats.push(result[i]);
				};
			});
		};
module.exports = GobiernoCtrl;