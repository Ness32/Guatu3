'use strict';

var SingleCtrl = function($scope ,API){
	var _this= $scope;
	this.showData(_this, API);
};

SingleCtrl.prototype.showData = function(_this,API){
	_this.singles=[];
	

		API.getSingle().success(function (results){
		for (var i = 0; i < results.length; i++) {
				_this.singles.push(results[i]);											
			}; 
		});
		API.getSucursales().success(function (results){
			 
			 if (results.length > 0 ) {
	      _this.sucursales = results;
	      console.log(results);
	    };
		});
	};
module.exports = SingleCtrl;