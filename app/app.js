require('angular')
require('angular-ui-bootstrap')
var MainController = require('./controllers/MainController');


var app = angular.module('app',['ui.bootstrap']).filter('limitDecimal',function($filter){
      return function (input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
})
app.controller('MainController', ['$scope', '$http', MainController])

