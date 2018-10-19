var Application = angular.module('Application', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
Application.controller('AppController', function AppController($scope) {
    AppCtrl=$scope;
    console.log(AppCtrl);
    debugger
    AppCtrl.SSC=function SSC()
  {
    if(AppCtrl.isUG)
    {
    AppCtrl.isSSC=true;
    AppCtrl.isHSC=true;
    AppCtrl.MSD_EDU1QUAL="SSLC"
    AppCtrl.MSD_EDU2QUAL="HSC"
    }
    if(AppCtrl.isHSC)
    {
    AppCtrl.MSD_EDU1QUAL="SSLC"
    AppCtrl.MSD_EDU2QUAL="HSC"
    AppCtrl.isSSC=true;
    }
    if(AppCtrl.isSSC)
        AppCtrl.MSD_EDU1QUAL="SSLC"
    else
        AppCtrl.MSD_EDU1QUAL=""
  }
});
Application.directive("numbersOnly", NumbersOnly);
function NumbersOnly() {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function FromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(FromUser);
        }
    };
}