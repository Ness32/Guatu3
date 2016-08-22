"use strict";

var Controller = require('./controller');

var Home = angular.module('GuatUneed.home', []);

Home.controller('HomeCtrl', ['$scope', Controller])

module.exports = Home;