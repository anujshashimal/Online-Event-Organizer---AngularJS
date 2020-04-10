'use strict';

var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
    console.log("Controller");

    $scope.newEvent = {};
    $scope.clickedEvent = {};

    $scope.events = [
        {eventDescitption : "anuj", DateNTime: "12/12/12"}
    ];

    $scope.saveEvent = function () {
    console.log('Event Saved!')
        $scope.events.push($scope.newEvent);
        $scope.newEvent = {};
        $scope.EventMsg = "New Event Added!";

    }

    $scope.selectEvent = function (event) {
        console.log(event)
        $scope.clickedEvent = event
    }

    $scope.updateEvent = function () {
        $scope.EventMsg = "Event Updated Successfually!"

    }

    $scope.clearMsg = function(){
        $scope.EventMsg = ""
    }

    $scope.deleteEvent = function () {
        $scope.events.splice($scope.events.indexOf($scope.clickedEvent), 1);
        $scope.EventMsg = "Event Successfually Deleted!"

    }

})
