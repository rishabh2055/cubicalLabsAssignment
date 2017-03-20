/* Defining mail module for application */
var app = angular.module('mainApp', ['ui.router']);

/* Handling routes */
app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/dashboard.html',
			controller:'HomeController as homeCtrl'
		});	
});