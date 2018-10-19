var Application = angular.module('Application',[]);

// Define the `PhoneListController` controller on the `phonecatApp` module
Application.controller('AppController', function AppController($scope) {
    AppCtrl=$scope;
    AppCtrl.SSC=SSC;
    AppCtrl.Register=Register;
    function Register()
    {
        debugger
        MstStudent.readStudents().then(function successCallback(response){
            console.log(response.data.records);
        }, function errorCallback(response){
            console.log("Unable to read record.");
        });
    }
    function SSC()
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
Application.factory("MstStudent", function($http){
 
    var factory = {};
 
    // read all products
    factory.readStudents = function(){
        return $http({
            method: 'POST',
            url: 'http://saraswathicareerinstitute.com/api/MstStudent/read.php'
        });
    };
     
    // createProduct will be here
     
    return factory;
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