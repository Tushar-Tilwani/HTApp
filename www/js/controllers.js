angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

   

})

.controller('MedicinesCtrl', function($scope, Medicines) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.medicines = Medicines.all();
  $scope.remove = function(Medicine) {
    Medicines.remove(Medicine);
  };
})

.controller('MedicineDetailCtrl', function($scope, $stateParams, Medicines) {
  $scope.medicine = Medicines.get($stateParams.medicineId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
