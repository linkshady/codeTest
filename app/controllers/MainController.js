
module.exports = function($scope, $http, API){
  $scope.message = "AWWWW it wdddddorks";

  $scope.currentPage = 1;

    $scope.$watch('currentPage', function() {
        API.getValues($scope.currentPage).then(function(results){
         $scope.totalItems = results.data.total;
         $scope.bigTotalItems = results.data.total;
         $scope.data = results.data.assets;
        })  
    });

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };
  $scope.maxSize = 10;
  $scope.bigCurrentPage = 1;
  $scope.itemsPerPage = 5;
  
}