'use strict';
 var openSearch = function(){
 	
 	var _seleccionar = document.querySelector('.mostrar-search');

 	return{
 		restrict: 'A',
 		link: function(scope, element, attrs){
 			_seleccionar.addEventListener('click', function(e){
 				
 				alert('Busqueda Activa');

				 				
 			})
 		}
 	}

 };
 module.exports = openSearch;
