'use strict';
 var menuMobile = function(){
 	var _seleccionar = document.querySelector('.mobile');
 	var _mostrar = document.querySelector('.mostrar-mobile');
 	

 	return{
 		restrict: 'A',
 		link: function(scope, element, attrs){
 			_seleccionar.addEventListener('click', function(e){
 				$(_mostrar).addClass('translado-mobile');
 				
 				

				 				
 			})
 		}
 	}

 };
 module.exports = menuMobile;
