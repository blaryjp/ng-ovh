/**
 * ngOvh: Angular Service for OVH API - Example 01
 *
 * @author Jean-Philippe Blary (@blary_jp)
 * @url https://github.com/blaryjp/ng-ovh
 * @license MIT
 */

var myApp = angular.module('myApp', [
    'ngOvh'    // Require the ngOvh module here
]);

// Configure the Ovh module
myApp.config(function (OvhProvider) {

    // Set the Application Key (AK):
    OvhProvider.setAppKey('YOUR_APPLICATION_KEY');

    // Set the Application Secret (AS):
    OvhProvider.setAppSecret('YOUR_APPLICATION_SECRET');

});

myApp.controller('myInfosCtrl', function ($scope, Ovh) {

    // Am I logged ?
    $scope.isLogged = Ovh.isLogged();

    // User click on the "Log in" button
    $scope.login = function () {
        Ovh.login(window.location.href);
    };

    // If user is logged, get informations from OVH API
    if ($scope.isLogged) {
        Ovh.get('/me').then(function (infosFromApi) {
            $scope.infos = infosFromApi;
        });
    }

});
