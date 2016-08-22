'use strict';
var  NightlifeCtrl= function($scope,API){
	var _this = $scope;
	this.DOM(_this);
	this.showData(_this, API);
};

	NightlifeCtrl.prototype.DOM = function(_this){
		_this.title='Night Life';
	};
		NightlifeCtrl.prototype.showData = function(_this,API){
			_this.cats=[];
			API.getNightlife().success(function (results){
				_this.contador=results.length;
				for (var i = 0; i < results.length; i++) {
					_this.cats.push(results[i]);
					};
				});
			};
module.exports = NightlifeCtrl; 