'use strict';
var contactoTrigger= function(){

	var boton = document.querySelector('.botton');
	var anuncio_cont = document.querySelector('.sidenav-contacto');
	var cerrar = document.querySelector('.icono-cerrar');
	
	return{
		restrict: 'A',
		link: function(scope, element, attrs){
			boton.addEventListener('click',function(e){
					$(anuncio_cont).addClass('mostrar-sidenav');
					$(anuncio_cont).removeClass('sidenav-contacto');
					$(anuncio_cont).removeClass('hide-for-small-only')				
			});
			cerrar.addEventListener('click',function(e){
				$(anuncio_cont).removeClass('mostrar-sidenav');
				$(anuncio_cont).addClass('sidenav-contacto');
				$(anuncio_cont).addClass('hide-for-small-only')
			})
		}
	}
};
module.exports = contactoTrigger;
