var Application = angular.module('Application',[]);

// Define the `PhoneListController` controller on the `phonecatApp` module
Application.controller('RegistrationController', function RegistrationController($scope,$http) {
    RegistrationCtrl=$scope;
    RegistrationCtrl.SSC=SSC;
    RegistrationCtrl.Register=Register;
    function Register()
    {
        debugger
        var info="";
        $http.post('api/MstStudent/read.php', info).then(function (response) {
            RegistrationCtrl.msg = response;
            });
    }
    function SSC()
  {
      
    if(RegistrationCtrl.isUG)
    {
    RegistrationCtrl.isSSC=true;
    RegistrationCtrl.isHSC=true;
    RegistrationCtrl.MSD_EDU1QUAL="SSLC"
    RegistrationCtrl.MSD_EDU2QUAL="HSC"
    }
    if(RegistrationCtrl.isHSC)
    {
    RegistrationCtrl.MSD_EDU1QUAL="SSLC"
    RegistrationCtrl.MSD_EDU2QUAL="HSC"
    RegistrationCtrl.isSSC=true;
    }
    if(RegistrationCtrl.isSSC)
        RegistrationCtrl.MSD_EDU1QUAL="SSLC"
    else
        RegistrationCtrl.MSD_EDU1QUAL=""
  }
});
Application.directive('registration', function () {
    return {
    restrict: 'E',
    scope: false,
    templateUrl: 'registration.html',
    controller : 'RegistrationController'
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