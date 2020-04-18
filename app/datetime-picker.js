angular.module('dateExample', [])
    .controller('myController', ['$scope', function($scope) {
        $scope.example = {
            value: new Date(2010, 11, 28, 14, 57)
        };
    }]);