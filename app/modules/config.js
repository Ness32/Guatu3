'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			abstract: true,
			templateUrl: 'views/main.html',
			controller:'System'
		})
		.state('main.home', {
			url: '/',
			views: {
				"MainView": {
					templateUrl: 'views/home.html',
					controller:'AnunciosCtrl'
				}
			}
		})

		// aca comenzamos las pruebas de ui-routher

		.state('main.abogados',{
			url:'/abogados',
			views:{
				"MainView":{
					templateUrl:'views/Types/Abogados.html',
					controller:'AbogadosCtrl'
				}
			}
		})
		.state('main.contrucciones',{
			url:'/contrucciones',
			views:{
				"MainView":{
					templateUrl:'views/Types/Contrucciones.html',
					controller:'ContruccionesCtrl'
				}
			}
		})
		.state('main.comida',{
			 url:'/comidas',
			 views:{
			 	"MainView":{
			 		templateUrl:'views/Types/Comidas.html',
			 		controller:'ComidasCtrl'
			 	}
			 }
		})
		.state('main.deportes',{
			 url:'/deportes',
			 views:{
			 	"MainView":{
			 		templateUrl:'views/Types/Deportes.html',
			 		controller:'DeportesCtrl'
			 	}
			 }
		})
	
		
		
		.state('main.educacion',{
			 url:'/educacion',
			 views:{
			 	"MainView":{
			 		templateUrl:'views/Types/Educaciones.html',
			 		controller:'EducacionCtrl'
			 	}
			 }
		})
		
		.state('main.entretenimiento',{
			url:'/entretenimiento',
			views:{
				"MainView":{
					templateUrl:'views/Types/Entretenimiento.html',
					controller:'EntretenimientoCtrl'
				}
			}
		})
		.state('main.gobierno',{
			 url:'/gobierno',
			 views:{
			 	MainView:{
			 		templateUrl:'views/Types/Gobiernos.html',
			 		controller:'GobiernoCtrl'
			 	}
			 }
		})
		.state('main.medicina',{
			url:'/medicina',
			views:{
				
				"MainView":{
					templateUrl:'views/Types/Medicinas.html',
					controller:'MedicinaCtrl'
				}
			}
		})
		.state('main.moda',{
			url:'/moda',
			views:{
				"MainView":{
					templateUrl:"views/Types/Modas.html",
					controller:'ModaCtrl'
				}
			}
		})
		.state('main.nightlife',{
			url:'/nightlife',
			views:{
				"MainView":{
					templateUrl:"views/Types/NightLife.html",
					controller:'NightlifeCtrl'
				}
			}
		})
		.state('main.productos',{
			url:'/productos',
			views:{
				"MainView":{
					templateUrl:"views/Types/Productos.html",
					controller:'ProductosCtrl'

				}
			}
		})
		.state('main.servicios',{
			url:'/servicios',
			views:{
				"MainView":{
					templateUrl:"views/Types/Servicios.html",
					controller:'ServiciosCtrl'
				}
			}
		})
		.state('main.taxi',{
			url:'/taxi',
			views:{
				"MainView":{
					templateUrl:"views/Types/Taxis.html",
					controller:'TaxisCtrl'
				}
			}
		})
		.state('main.turismo',{
			url:'/turismo',
			views:{
				"MainView":{
					templateUrl:"views/Types/Turismo.html",
					controller:'TurismoCtrl'
				}
			}
		})
		.state('main.vehiculos',{
			url:'/vehiculos',
			views:{
				"MainView":{
					templateUrl:"views/Types/Vehiculos.html",
					controller:'VehiculosCtrl'
				}
			}
		})

		//subCategorias

		.state('main.subcategorias',{
			url:'/:type/:subcat_id',
			views:{
				"MainView":{
					templateUrl:"views/Types/Subcategorias.html",
					controller:'SubCtrl'
				}
			}
		})
		.state('main.single',{
			url:'/:type/:subcat_id/:single_id',
			views:{
				"MainView":{
					templateUrl:"views/Types/single.html",
					controller:'SingleCtrl'
				}
			}
		})
		.state('main.terminos',{
			url:'/terminos',
			views:{
				"MainView":{
					templateUrl:"views/Types/Terminos.html",
					controller:'TerminosCtrl'
				}
			}
		});
		

	// Theme config
	$mdThemingProvider.theme('default')
		.primaryPalette('light-blue')
		.accentPalette('orange');
};