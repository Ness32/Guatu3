'use strict';
var env = require('../../env');

var API=function($http,$stateParams){

	return{
		getAbogados:function(){
			return $http.get(env.BASE_URL+'abogados',{params:{token:env.TOKEN}});
		},
		getComidas:function(){
			return $http.get(env.BASE_URL+'comidas',{params:{token:env.TOKEN}});
		},
		getContrucciones:function(){
			return $http.get(env.BASE_URL+'construcciones',{params:{token:env.TOKEN}});
		},
		getDeportes: function(){
			return $http.get(env.BASE_URL+'deportes',{params:{token:env.TOKEN}});
		},
		getEducacion:function(){
			return $http.get(env.BASE_URL+'educaciones',{params:{token:env.TOKEN}});
		},
		getEntretenimiento:function(){
			return $http.get(env.BASE_URL+'entretenimientos',{params:{token:env.TOKEN}});
		},
		getGobierno:function(){
			return $http.get(env.BASE_URL+'gobierno',{params:{token:env.TOKEN}});
		},
		getMedicinas:function(){
			return $http.get(env.BASE_URL+'medicinas',{params:{token:env.TOKEN}});
		},
		getModas:function(){
			return $http.get(env.BASE_URL+'modas',{params:{token:env.TOKEN}});
		},
		getNightlife:function(){
			return $http.get(env.BASE_URL+'tagnight',{params:{token:env.TOKEN}});
		},
		getProductos:function(){
			return $http.get(env.BASE_URL+'productos',{params:{token:env.TOKEN}});
		},
		getServicios:function(){
			return $http.get(env.BASE_URL+'servicios',{params:{token:env.TOKEN}});
		},
		getTaxi:function(){
			return $http.get(env.BASE_URL+'taxis',{params:{token:env.TOKEN}});
		},
		getTurismo:function(){
			return $http.get(env.BASE_URL+'turismos',{params:{token:env.TOKEN}});
		},
		getVehiculos:function(){
			return $http.get(env.BASE_URL+'vehiculos',{params:{token:env.TOKEN}});
		},
		getSubCategorias:function(){
			return $http.get(env.BASE_URL+ $stateParams.type +'/'+ $stateParams.subcat_id,{params:{token:env.TOKEN}});
		},
		getSingle:function(){
			return $http.get(env.BASE_URL+ $stateParams.type +'/'+ $stateParams.subcat_id +'/'+ $stateParams.single_id,{params:{token:env.TOKEN}});
		},
		getSucursales:function(){
			return $http.get(env.BASE_URL+ $stateParams.type + '/' + $stateParams.subcat_id+'/'+$stateParams.single_id+'/meta/sucursales', {params: {token: env.TOKEN}});
		},
		enviarContacto:function(form){
			return $http.post('http://guatuneed.com/api/contact', form);
		},
		getSearch:function(){
			return $http.get(env.BASE_URL+'search',{params:{token:env.TOKEN}});
		}


	};

};
module.exports = API;