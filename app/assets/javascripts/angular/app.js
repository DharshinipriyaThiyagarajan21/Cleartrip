var app = angular.module('app',["ngAria", "ngAnimate", "ngMaterial","ngResource","ngRoute","rzModule"],function($locationProvider){
	$locationProvider.html5Mode(true);
});

// app.config(function($routeProvider, $locationProvider){
// 	$locationProvider.html5Mode(true);
// 	$locationProvider.hasPrefix('');
// })
