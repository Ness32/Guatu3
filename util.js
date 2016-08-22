'use strict';
module.exports = {
	PROJECT_DIR: __dirname,
	CONFIG: {
		ENV: 'prod',
		//ENV: 'dev',
		COMPONENTS: __dirname + '/shell/modules/',
		BASE_MAIN: 'http://192.168.1.12:5030/',
		PORT: 5030,
		THIRD_PARTY: {
		}
	}
}
