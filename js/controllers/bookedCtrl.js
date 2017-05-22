angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){





  $scope.package = mainSrv.findID($stateParams.id);



})
