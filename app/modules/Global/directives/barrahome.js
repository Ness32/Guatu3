barra = function(){};

barra.prototype.poner = function(state){
	
	var seleccionar = document.querySelector('.nada');
	var is_firefox = navigator.userAgent.indexOf('Chrome') > -1;
	$(seleccionar).addClass('barranavegacionhome');
		var  poner = angular.element(document.querySelector('.image-container'));
		$(poner).addClass('hide-for-small-only');
		$('.mostrar-mobile').removeClass('translado-mobile');
		$('.sidenav-search-sub').addClass('sidenav-search-sub-cat')
		$('.nada-movil').addClass('hide-for-small-only');

		if(is_firefox){
					}else{
						$('.bandera-full').removeClass('full-screen');
						$('.bandera-full').addClass('full-screen-mozilla');

					}
					if(navigator.userAgent.match(/Android/i)){							
						$('.app-badge').addClass('hide-for-small-only');
					}else{
							if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
							$('.play-badge').addClass('hide-for-small-only');						
					}
					}					
		
};
	barra.prototype.quitar= function(){
		var seleccionar = document.querySelector('.nada');		
		$(seleccionar).removeClass('barranavegacionhome');  
		var  quitar = document.querySelector('.mostrar-mobile');
		$(quitar).removeClass('translado-mobile');
		var remover = document.querySelector('.bandera');
		$(remover).removeClass('navegacion-home');
		$('.nada-movil').removeClass('hide-for-small-only')
		
	};

exports.barra=barra;
