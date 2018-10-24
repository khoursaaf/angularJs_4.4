var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("assets/js/voiture.json")
  .then(function(response) {
      $scope.khoursa = response.data;
  });
});