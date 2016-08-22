'use strict';
var ClearSearch = function(){
	
	return{
			restrict:'A',
			link: function(scope , element, attrs){
				element.on('click',function(){
					scope.search = '';
					
					
				});
				
			}
		}
};
module.exports = ClearSearch;