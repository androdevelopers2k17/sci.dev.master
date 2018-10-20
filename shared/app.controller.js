var Application = angular.module('Application',['uuid4','toastr','ngAnimate']);

// Define the `PhoneListController` controller on the `phonecatApp` module
Application.controller('AppController', function AppController($scope,$http,toastr,toastrConfig) {
    AppCtrl=$scope;
});
Application.controller('RegistrationController', function RegistrationController($scope,$http,MstStudent,uuid4,toastr,toastrConfig) {
    RegistrationCtrl=$scope;
    var openedToasts = [];

    RegistrationCtrl.toast = {
      title: 'Test',
      message: 'Error Warning'
    };

    RegistrationCtrl.options = {
      autoDismiss: false,
      position: 'toast-top-right',
      type: 'success',
      timeout: '5000',
      extendedTimeout: '1000',
      html: false,
      closeButton: true,
      tapToDismiss: true,
      progressBar: true,
      closeHtml: '<button>&times;</button>',
      newestOnTop: true,
      maxOpened: 0,
      preventDuplicates: false,
      preventOpenDuplicates: false
    };
    RegistrationCtrl.SSC=SSC;
    RegistrationCtrl.Register=Register;
    RegistrationCtrl.Student=MstStudent;
    function Register()
    {
        RegistrationCtrl.Student.MSD_PK=uuid4.generate();
        validation();
    }
    function SSC()
  {   
    if(RegistrationCtrl.Student.MSD_IsUG)
    {
    RegistrationCtrl.Student.MSD_IsSSC=true;
    RegistrationCtrl.Student.MSD_IsHSC=true;
    RegistrationCtrl.Student.MSD_EDU1QUAL="SSLC"
    RegistrationCtrl.Student.MSD_EDU2QUAL="HSC"
    }
    if(RegistrationCtrl.Student.MSD_IsHSC)
    {
    RegistrationCtrl.Student.MSD_EDU1QUAL="SSLC"
    RegistrationCtrl.Student.MSD_EDU2QUAL="HSC"
    RegistrationCtrl.Student.MSD_IsSSC=true;
    }
    if(RegistrationCtrl.Student.MSD_IsSSC)
        RegistrationCtrl.Student.MSD_EDU1QUAL="SSLC"
  }
  function validation()
{
    if(!RegistrationCtrl.Student.MSD_IsSSC)
    {
        toastr.error("Please Enter Course Details");
    }
    else {$http.post('http://saraswathicareerinstitute.com/api/MstStudent/create.php', RegistrationCtrl.Student).then(function (response) {
        RegistrationCtrl.msg = response;
        });}
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