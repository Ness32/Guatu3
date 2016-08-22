Toast = function(){}

Toast.prototype.mostrar = function($mdToast){
	$mdToast.show(
			$mdToast.simple()
			.content('¡Mensaje Enviado Exitosamente!')
			.position('top right')
			.hideDelay(3000)
		);

}
exports.Toast = Toast;