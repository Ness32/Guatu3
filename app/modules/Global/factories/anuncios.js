'use strict';
var env= require('../../env');

var Anuncios = function($http){
	var base = env.BASE_URL;
	var token = env.TOKEN;
	return{
		getAnuncios: function(){
			return $http.get(base+'anuncios',{params:{token: token}})
		}
	}; 

};
module.exports = Anuncios;