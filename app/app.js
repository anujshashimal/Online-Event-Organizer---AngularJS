'use strict';

// Declare app level module which depends on views, and core components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
    console.log("Controller");

    $scope.newEvent = {};

    $scope.events = [
        // {eventDescitption : "anuj", DateNTime: "12/12/12"}
    ];

    $scope.saveEvent = function () {
    console.log('Event Saved!')
        console.log($scope.newEvent);
        $scope.events.push($scope.newEvent);

    }

})
