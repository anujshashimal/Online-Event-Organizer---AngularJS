'use strict';

var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope, $interval) {
    console.log("Controller");

    $scope.newEvent = {};
    $scope.clickedEvent = {};

    $scope.events = [
    ];

    $scope.saveEvent = function () {
        if($scope.newEvent.eventDescitption != null ){

            if($scope.newEvent.DateNTime != null){
                console.log('Event Saved!')
                console.log($scope.newEvent)
                $scope.events.push($scope.newEvent);
                $scope.newEvent = {};
                $scope.EventMsg = "New Event Added!";
            }else{
                alert("Please Enter Correct Date And Time Values ")

            }

        }else {
            alert("Please Enter Event Name ")
        }
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

    $scope.sortDate = function(comment) {
        var date = new Date(comment.created);
        return date;
    };

$scope.searchEvent = function(){
    var searchText = element(by.model('searchText'));
    searchText.clear();
    searchText.sendKeys('m');

    searchText.clear();
    searchText.sendKeys('76');
}

    $scope.searchEvent = function(){
        var searchTextDate = element(by.model('searchText'));
        searchTextDate.clear();
        searchTextDate.sendKeys('m');

        searchTextDate.clear();
        searchTextDate.sendKeys('76');
    }

$interval(function (){
     // console.log($scope.newEvent.DateNTime - )
    // let cnum1 = Date.parse($scope.newEvent.DateNTime)
    //     // console.log(cnum1)
    // console.log($scope.newEvent.DateNTime)
    let nTime = Math.floor(Date.now() / 1000);
    let time = Math.floor(0);

    let Remaining = nTime - time;
    $scope.rdays = parseInt(Remaining / 60/60/24)
        $scope.rHours = parseInt((Remaining - ($scope.rdays*60*60*24)) / 60/60)
        $scope.rMinutes = parseInt((Remaining - ($scope.rdays*60*60*24) - ($scope.rdays*60*60))/60)
        $scope.rSeconds = parseInt(Remaining - ($scope.rdays*60*60*24) - ($scope.rdays*60*60) - ($scope.rMinutes*60))


    },1000);







})
