(function () {
    "use strict";

    angular
        .module("Application")
        .directive("delayReason", DelayReason);

    DelayReason.$inject = [];

    function DelayReason() {
        var exports = {
            restrict: "EA",
            templateUrl: "app/shared/standard-menu-directives/delay-reason/delay-reason/delay-reason.html",
            controller: 'DelayReasonController',
            controllerAs: 'DelayReasonCtrl',
            bindToController: true,
            scope: {
                input: "="
            },
            link: Link
        };
        return exports;

        function Link(scope, ele, attr) { }
    }
})();
