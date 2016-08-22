'use strict';

var SubCtrl = function($scope ,API){
	var _this= $scope;
	this.showData(_this, API);
};
SubCtrl.prototype.showData = function(_this,API){
	_this.subcats=[];
	API.getSubCategorias().success(function (results){
		_this.clase_imagen = results[0].taxonomy;
		_this.clase_titulo = results[0].name;	
		for (var i = 0; i < results.length; i++) {
			_this.subcats.push(results[i]);

		};
	});
};
module.exports = SubCtrl;
