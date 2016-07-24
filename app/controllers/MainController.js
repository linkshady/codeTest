
module.exports = function($scope, $http){
  $scope.message = "AWWWW it wdddddorks";

  $scope.currentPage = 1;

    function call(page){
      $http({
        url: 'http://ec2-52-86-89-220.compute-1.amazonaws.com/api/assets/search',
        method: 'POST',
        data:
      {
        location: {"lat":40.7127837,"lon":-74.00594130000002,"radius":"5mi"},
        currentPage: page
      },
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      }).then(function (results) {
        $scope.totalItems = results.data.total;
        $scope.bigTotalItems = results.data.total;
        $scope.data = results.data.assets;
        console.log($scope.data);
        return results;
      }).catch(function (e) {
      });
    }

    $scope.$watch('currentPage', function() {
        call($scope.currentPage);
    });

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };
//latitude = data.coordinates.lat,
//longitude = data.coordinates.lon,
//location= data.location,
//media + copy_size = data.media and data.copy_size,
//cpm = data.cpm
//and add button
  $scope.maxSize = 10;
  $scope.bigCurrentPage = 1;
  $scope.itemsPerPage = 5;



  
}