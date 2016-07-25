var services = angular.module('app.services',[]);

services.factory('API', function($http){

  return{
    getValues: function(page){
      var resultsPromise = $http({
        url: 'http://ec2-52-86-89-220.compute-1.amazonaws.com/api/assets/search',
        method: 'POST',
        data:
      {
        location: {"lat":40.7127837,"lon":-74.00594130000002,"radius":"5mi"},
        currentPage: page
      },
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      }).then(function (results) {
        console.log("funciono");
        return results;
      }).catch(function (e) {
      });

      return resultsPromise;
    }

  }
})