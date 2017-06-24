/// <reference path="C:\Users\Kevin Schwert\Documents\Visual Studio 2015\Projects\MVCPortfolio\MVCPortfolio\Views/Home/appInfo.cshtml" />
/// <reference path="C:\Users\Kevin Schwert\Documents\Visual Studio 2015\Projects\MVCPortfolio\MVCPortfolio\appInfo.html" />

app.directive('appInfo', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'appInfo.html'
    };
});