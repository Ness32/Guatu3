'use strict';

//
//	Dependencies
//

var Routes = require('angular-ui-router');

// Modules
var Global = require('./Global/global');
var Home = require('./Home/home.js');
var Abogados = require('./Abogados/abogados');
var Comidas = require('./Comidas/comidas');
var Contrucciones = require('./Contrucciones/contrucciones');
var Deportes = require('./Deportes/deportes');
var Educacion= require('./Educacion/educacion');
var Entretenimiento = require('./Entretenimiento/entretenimiento');
var Gobierno = require('./Gobiernos/gobierno');
var Medicina = require('./Medicina/medicina');
var Moda = require('./Modas/moda');

var Night = require('./NightLife/nightlife');
var Productos = require('./Productos/productos');
var Servicios = require('./Servicios/servicios');
var Taxis = require('./Taxi/taxi');
var Turismo = require('./Turismo/turismo');
var Vehiculos = require('./Vehiculos/vehiculo');
var Subcat = require('./Subcategorias/subcategorias');
var Single = require('./Single/single');
var Anuncios = require('./Anuncios/anuncios');
var Contacto = require('./Contactos/contacto');
var Search = require('./Search/search');
var Terminos = require('./Terminos/terminos');


module.exports = angular.module('GuatUneed', [ 'angular-carousel', Routes,'ngMaterial','ngSanitize', Home.name , Global.name , Abogados.name , Comidas.name , Contrucciones.name , Deportes.name , Educacion.name , Entretenimiento.name , Gobierno.name , Medicina.name , Moda.name , Night.name , Productos.name , Servicios.name , Taxis.name , Turismo.name , Vehiculos.name , Subcat.name , Single.name , Anuncios.name, Contacto.name, Search.name, Terminos.name])
				.config(require('./config'));