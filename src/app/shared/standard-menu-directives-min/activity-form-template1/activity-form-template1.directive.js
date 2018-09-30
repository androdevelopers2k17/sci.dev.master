(function () {
    "use strict"
    angular
        .module("Application")
        .directive("activityFormTemplate1", ActivityFormTemplate1Directive)
        .directive("taskActivityDynamicDirective", TaskActivityDynamicDirective);

    function ActivityFormTemplate1Directive() {
        var exports = {
            restrict: "EA",
            templateUrl: "app/shared/standard-menu-directives-min/activity-form-template1/activity-form-template1.html",
            link: Link,
            controller: "ActivityFormTemplate1Controller",
            controllerAs: "ActivityFormTemplate1Ctrl",
            bindToController: true,
            scope: {
                currentObj: "=",
                taskObj: "="
            },
            link: Link
        };

        return exports;

        function Link(scope, elem, attr) { }
    }

    TaskActivityDynamicDirective.$inject = ["$compile", "$injector", "$filter", "myTaskActivityConfig"];

    function TaskActivityDynamicDirective($compile, $injector, $filter, myTaskActivityConfig) {
        var exports = {
            restrict: "EA",
            scope: {},
            link: Link,
        };
        return exports;

        function Link(scope, ele, attr) {
            // var obj = {
            //     "ModuleCode": "Shipment",
            //     "SubModuleCode": "Activity",
            //     "Category": "Activity",
            //     "Code": "export-sea-shipment-cargo-pickup-glb-view",
            //     "Name": "Cargo Pickup",
            //     "MappingCode": "ACTIVITY_CONFIG",
            //     "EEM_FK_1": "261647b5-3f69-4f93-874b-061696c618d3",
            //     "EEM_Code_1": "activity-form-template1",
            //     "EEM_FK_2": "dc070c79-6447-436a-92e6-735b37d2c95e",
            //     "EEM_Code_2": "CARGO_PICKUP",
            //     "EEM_Code_3": "DEFAULT",
            // }
            // myTaskActivityConfig.Entities.TaskConfigData.push(obj);

            var DataEntryDetails = $filter('filter')(myTaskActivityConfig.Entities.TaskConfigData, { Category: 'Activity' });
            if (DataEntryDetails.length > 0) {

                var TempDetails = DataEntryDetails[0].Code.split('-');
                for (i = 0; i < TempDetails.length; i++) {
                    if (i != 0) {
                        TempDetails[i] = TempDetails[i].charAt(0).toUpperCase() + TempDetails[i].slice(1);
                    }
                }
                TempDetails = TempDetails.join('');
                var _isExist = $injector.has(TempDetails + "Directive");
                if (_isExist) {
                    scope.templateDir = '<' + DataEntryDetails[0].Code + '/>';
                    var newDirective = angular.element(scope.templateDir);
                    var view = $compile(newDirective)(scope);
                    ele.append(view);
                } else {
                    var el = angular.element('<span/>');
                    el.append('<div class="warning-message">Incorrect Activity.</div>');
                    $compile(el)(scope);
                    ele.append(el);
                }
            } else {
                var el = angular.element('<span/>');
                el.append(' <div class="warning-message">Activity Screen Not Yet Configured.</div>');
                $compile(el)(scope);
                ele.append(el);
            }

        }
    }

})();
