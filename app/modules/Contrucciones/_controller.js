'user strict'

var ContruccionesCtrl = function($scope,API){
	var _this = $scope;
	this.DOM(_this);
	this.showData(_this, API);
};

	ContruccionesCtrl.prototype.DOM = function(_this){
		
		_this.title='Contrucciones';
	};
		ContruccionesCtrl.prototype.showData= function(_this,API){
			_this.cats=[];
			API.getContrucciones().success(function(results){
				_this.contador=results.length;
				for (var i = 0; i < results.length; i++) {
					_this.cats.push(results[i]);
				};
			});
		};
module.exports = ContruccionesCtrl;