'use strict'
var EducacionCtrl = function($scope,API){
	var _this =$scope;
	this.DOM(_this);
	this.shoWData(_this,API);
};
	EducacionCtrl.prototype.DOM = function(_this){
		
		_this.title='Educacion';
	};
		EducacionCtrl.prototype.shoWData = function(_this,API){
			_this.cats=[];
			API.getEducacion().success(function (results){
				_this.contador=results.length;
				for (var i = 0; i < results.length; i++) {
					_this.cats.push(results[i]);
				};
			});
		};
module.exports= EducacionCtrl; 