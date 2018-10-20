(function () {
    "use strict";

    angular
        .module("Application")
        .directive('pageTitle', PageTitle)
        .directive('loadScript', LoadScript)
        .directive('sidebarMenu', SidebarMenu)
        .directive('loadingContainer', LoadingContainer)
        .directive('sidebarCollapse', SidebarCollapse)
        .directive('uibDatepickerPopup', UibDatepickerPopup)
        .directive('customDateTimeFormat', CustomDateTimeFormat)
        .directive('loadDynamicCtrl', LoadDynamicCtrl)
        .directive("capitalize", Capitalize)    
        .directive("numbersOnly", NumbersOnly)
        .directive("sbPrecision", SBPrecision)
        .directive('dynamicLoad', DynamicLoad)
        .directive('noSpecialChar', NoSpecialChar)
        .directive('alphabetsOnly', AlphabetsOnly)
        .directive('noSpecialExceptComma', NoSpecialExceptComma)
        .directive('numbersOnlyDot', NumbersOnlyDot)
        .directive('registration', Registration);

        function Registration(){
                return {
                    templateUrl: 'shared/registration.html',
                    //controller: 'RegistrationController'
                };
        }

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

    function Capitalize() {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                element.on('keypress', function (event) {
                    console.log(event)
                    var capitalize = function (inputValue) {
                        if (angular.isUndefined(inputValue))
                            return;

                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            modelCtrl.$setViewValue(capitalized);
                            modelCtrl.$render();
                        }
                        return capitalized;
                    }

                    modelCtrl.$parsers.push(capitalize);
                    capitalize(scope[attrs.ngModel]);
                });
            }
        };
    }

    function SBPrecision() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attributes, ngModel) {
                var precision = attributes.sbPrecision;

                function SetPrecision() {
                    var value = ngModel.$modelValue;
                    if (value && !isNaN(value)) {
                        var formatted = Number(value).toFixed(precision);
                        ngModel.$viewValue = formatted;
                        ngModel.$setViewValue(formatted);
                        ngModel.$render();
                    }
                    if (value == null || value == '' || value == 0) {
                        var formatted = ''
                        ngModel.$viewValue = formatted;
                        // ngModel.$setViewValue(formatted);
                        ngModel.$render();
                    }
                }

                element.bind('blur', SetPrecision);
                setTimeout(SetPrecision, 0);
            }
        };
    }

    function UibDatepickerPopup(uibDateParser) {
        return {
            restrict: 'A',
            priority: 1,
            require: '^ngModel',
            link: function (scope, element, attr, ngModel) {
                var dateFormat = attr.uibDatepickerPopup;
                ngModel.$formatters.push(function formatter(modelValue) {
                    var date = modelValue != null ? new Date(modelValue) : new Date('');
                    return date;
                });
            }
        };
    }

    function DynamicLoad($document, $window) {
        return {
            restrict: 'A',
            scope: {
                loadMore: '='
            },
            link: function (scope, element, attr, ngModel) {
                var el = element[0] || element;
                $document.on('scroll', function () {
                    if (($document.height() - $window.innerHeight) - $window.scrollY < 20) {
                        scope.loadMore();
                    }
                    scope.$apply(function () {});
                });
            }
        };
    }

    // Date and Time Format
    function CustomDateTimeFormat($filter, $timeout, APP_CONSTANT) {
        var _exports = {
            restrict: 'A',
            priority: 1,
            require: '^ngModel',
            link: Link
        };

        return _exports;

        function Link(scope, element, attr, ngModel) {
            ngModel.$parsers.push(Parser);
            ngModel.$formatters.push(Formatter);

            function Parser(modelValue) {
                var _output = null;

                if (modelValue) {
                    if (attr.enableDate == "true" && attr.enableTime == "false") {
                        _output = $filter('date')(modelValue, APP_CONSTANT.DatePicker.dateFormatDB);

                        $timeout(function () {
                            ngModel.$modelValue = $filter('date')(modelValue, attr.datetimePicker);
                            ngModel.$viewValue = _output;
                            // ngModel.$setViewValue(_output);
                            // ngModel.$render();
                        });
                    } else {
                        _output = $filter('date')(modelValue, APP_CONSTANT.DatePicker.dateTimeFullFormat);
                    }
                }

                return _output;
            }

            function Formatter(modelValue) {
                var _output = null;

                if (modelValue) {
                    if (attr.enableDate == "true" && attr.enableTime == "false") {
                        _output = $filter('date')(modelValue, attr.datetimePicker);
                    } else {
                        _output = $filter('date')(modelValue, APP_CONSTANT.DatePicker.dateTimeFullFormat);
                    }
                }

                return _output;
            }
        }
    }
    
    // no special Chars
    function NoSpecialChar() {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    if (inputValue == undefined)
                        return ''
                    var cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
                    var cleanInputValue1 = inputValue.replace(/_/g, '');

                    if (cleanInputValue1 == cleanInputValue) {
                        modelCtrl.$setViewValue(cleanInputValue);
                        modelCtrl.$render();
                        return inputValue;
                    } else {
                        var test = inputValue.substring(0, inputValue.length - 1);
                        modelCtrl.$setViewValue(test);
                        modelCtrl.$render();
                        return inputValue;
                    }
                });
            }
        };
    }

    function AlphabetsOnly() {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function FromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^a-zA-Z\s]/g, '');

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

    function NoSpecialExceptComma() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {
                ngModel.$parsers.push(function (viewValue) {
                    var reg = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?.]*$/;
                    // if view values matches regexp, update model value
                    if (viewValue.match(reg)) {
                        return viewValue;
                    }
                    // keep the model value as it is
                    var transformedValue = ngModel.$modelValue;
                    ngModel.$setViewValue(transformedValue);
                    ngModel.$render();
                    return transformedValue;
                });
            }
        };
    }

    function NumbersOnlyDot() {
        return {
            restrict: 'A',
            require: '^ngModel',
            link: function (scope, element, attrs, ngModel) {
                element.on('keypress', function (event) {
                    scope.ngModel = element.val();
                    if (scope.ngModel == undefined) {
                        if (event.which < 48 || event.which > 57) {
                            event.preventDefault();
                        }
                    } else {
                        scope.ngModel.replace(/[^0-9\.]/g, '');
                        var arrayL = [];
                        arrayL = scope.ngModel.split('.');
                        if (event.which == 46 && arrayL.length == 2) {
                            event.preventDefault();
                        } else if ((event.which < 48 || event.which > 57) && event.which != 46) {
                            event.preventDefault();
                        }
                    }
                });
            }
        };
    }

})();
