require('angular')
require('angular-ui-bootstrap')
require('./services/api')
require('./filters/filters')
var MainController = require('./controllers/MainController');


var app = angular.module('app',['ui.bootstrap', 'app.services', 'app.filters'])
app.controller('MainController', ['$scope', '$http','API', MainController])

