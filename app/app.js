(function () {
	'use strict';
	angular.module('drivingBehaviorApp', ['ngRoute'])
	.config(['$routeProvider', '$qProvider', '$locationProvider', function ($routeProvider, $qProvider, $locationProvider)
	{
		$qProvider.errorOnUnhandledRejections(false);
		$locationProvider.hashPrefix('');

		$routeProvider.when('/home', {
		  templateUrl : "app/views/home/home.html",
		 controller : "homeController",
		 controllerAs: "homeCtrl"
		})
		.when('/main', {
		  templateUrl : "app/views/main/main.html",
		 controller : "mainController",
		 controllerAs: "mainCtrl"
		})
		.otherwise({ redirectTo : "/home"});
	}]);
})();