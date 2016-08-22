'use strict';

var menuTrigger = function(){
	var _menuTrigger = document.querySelector('.menu_trigger');
	var _menu = angular.element(document.querySelector('#sidenav'));
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
				_menu.on("mouseenter" , function(){
					_menu.addClass("open");
				});
				_menu.on("mouseleave",function(){
					_menu.removeClass("open");
				});
		}
	}
};

module.exports = menuTrigger;