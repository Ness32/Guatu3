"use strict";

var menuScroll = function(){
	return{
		strict:"A",
		link: function(scope, element, attrs){
			$(".nano").nanoScroller();
				
		}
	}
};

module.exports = menuScroll;