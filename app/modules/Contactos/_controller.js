'use strict';
var  Aviso = require('./directives/toast').Toast;
var mostrar = new Aviso();

var  ContactoCtrl=function( $scope,API, $mdToast, $mdDialog){
	var _this = $scope;
	_this.contacto = {
		nombre: "",
		email: "",
		mensaje: "",
	};

	 _this.hacerContacto = function(){
	 	var nombre = this.contacto.nombre;
	 	var email = this.contacto.email;
	 	var  mensaje = this.contacto.mensaje;
		if(!email || !email){
			alert('ingresa el email');
			return false;
		}
		API.enviarContacto({
			nombre: nombre,
			email: email,
			mensaje: mensaje

		}).success(function(data){
			mostrar.mostrar($mdToast);
			console.log('Enviado');
		}).error(function(err){
			console.log(error);
		});
	};
	_this.mensaje = function(e){
	$mdDialog.show(
      $mdDialog.alert()
        .title('Termino De Uso')
        .content('Acordamos que “GuatUneed” de Klaser no será responsable de la administración y funcionamiento de “El anunciante”, debido a la naturaleza del servicio que se presta siendo únicamente un portal tecnológico que sirve de plataforma para que los clientes se dan a conocer al público en Guatemala, por lo que en ningún caso “GuatUneed” de Klaser será responsable de la publicidad del anunciante así como también de alguna negligencia, imprudencia o impericia que realicen los clientes en el giro de sus negocios.Las marcas, nombres comerciales, logotipos, diseños, trade dress, expresiones o señales de publicidad y obras protegidas por derecho de autor o derechos conexos incluidas en esta base de datos, son propiedad de sus respectivos titulares. Klaser, S. A. no es licenciataria, franquiciataria, agente, distribuidora, representante o concesionaria de dichos titulares. b)Si no desea aparecer en esta base de datos, por favor comuníquese con nosotros a info@guatuneed.com. c) © 2015 Klaser, S. A. Todos los derechos reservados.')
        .ok('Aceptar')


    );
		$('.cuerpo-scroll').removeAttr("style");  
	};
	_this.seguir = function(){
		$('.contenedor-search').toggleClass('aparecer');
		
		
	};

	_this.busqueda = function(){
		$('.sidenav-search').removeClass('show-for-small-only');
		$('.sidenav-search').removeClass('hide-for-small-only');
		$('.sidenav-search-single').removeClass('hide-for-small-only');
		$('.sidenav-search-cat').removeClass('hide-for-small-only');
		$('.sidenav-search-cat2').removeClass('hide-for-small-only');
		$('.bandera2').removeClass('estilotitulo2');
		//$('.estilotitulo2').toggleClass('bandera2');
		$('.sidenav-search-sub').removeClass('hide-for-small-only')

	};
	_this.cerrarbusqueda = function(){
		$('.sidenav-search').addClass('hide-for-small-only');
		$('.sidenav-search-sub').addClass('hide-for-small-only');
		$('.sidenav-search-cat').addClass('hide-for-small-only');
		$('.sidenav-search-cat2').addClass('hide-for-small-only');
		$('.bandera2').addClass('estilotitulo2');
		$('.sidenav-search-single').addClass('hide-for-small-only')
	}
	_this.llamartaxi = function(){
		$('.mostrar-mobile').addClass('hide-for-small-only');
		$('.sidenav-taxi').removeClass('show-for-small-only');
		$('.navegacion-home').toggleClass('bloquear-taxi');

		$('.sidenav-taxi').removeClass('hide-for-small-only')


	}
	_this.invisible = function(){
		$('.mostrar-mobile').removeClass('translado-mobile');

	}
	_this.cerrartaxi = function(){
		$('.sidenav-taxi').addClass('hide-for-small-only');
		$('.mostrar-mobile').removeClass('hide-for-small-only');
		$('.bandera').removeClass('bloquear-taxi')
	}


};
module.exports = ContactoCtrl;