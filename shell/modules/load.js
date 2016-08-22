'use strict';
var fs = require('fs');

module.exports = function(express, server){
	var components = {
		init: function(){
			var installer = this.installComponents();
			this.loadComponents(installer);
		},
		installComponents: function(){
			var i = _util.CONFIG.COMPONENTS + 'install.json';

			var install = fs.readFileSync(i, 'utf8', function(err, data){
				if (err) {
					throw err;
					return;
				}
				return data;
			});
			install = JSON.parse(install);

			//
			//	Installed Components
			//
			var readModules = install.modules;
			return readModules;
		},
		loadComponents: function(installer){
			for(var key in  installer){
				require(_util.CONFIG.COMPONENTS + installer[key] + '/app')(express, server);
			}
		}
	};
	components.init();
};