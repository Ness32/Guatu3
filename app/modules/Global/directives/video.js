'use strict';

var  videoTrigger= function(){
	var seleccionar = document.querySelector('.video-container');
	var video_container= document.querySelector('.main-video');
	return{
		restrict: 'A',
		link: function(scope, element, attrs){
         seleccionar.addEventListener('click',function(e){
               	$(video_container).addClass('active');
               	
         	})		
		}
	}
};
module.exports  = videoTrigger;