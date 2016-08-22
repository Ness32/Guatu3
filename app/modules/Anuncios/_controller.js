'use strict';
var AnunciosCtrl =function($scope , anuncios){
 var _this = $scope;
 this.showData(_this , anuncios);

};
	AnunciosCtrl.prototype.showData = function(_this,anuncios){
		_this.ofertas=[];
		_this.anuncios=[];
		anuncios.getAnuncios().success(function (results){
			for (var i = 0; i < results.length; i++) {
				if (results[i].Categories =='night') {
					_this.anuncios.push(results[i]);
				} else{
					_this.ofertas.push(results[i]);					
				};
			};	        
		});
	};
module.exports = AnunciosCtrl; 