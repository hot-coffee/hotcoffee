var app = angular.module('mworks',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			controller: 'MainController',
			templateUrl: './js/views/homeview.html'
		})
		.when('/profiles/:id',{
			controller: 'PhotoController',
			templateUrl: './js/views/profileview.html'
		})
})