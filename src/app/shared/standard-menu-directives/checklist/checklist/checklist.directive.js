(function () {
    "use strict";

    angular
        .module("Application")
        .directive("checklist", Checklist);

    Checklist.$inject = ["$templateCache"];

    function Checklist($templateCache) {
        var _template = `<div class="clearfix checklist"></div>`;
        $templateCache.put("CheckList.html", _template);

        var exports = {
            restrict: "EA",
            templateUrl: "CheckList.html",
            controller: 'ChecklistController',
            controllerAs: 'ChecklistCtrl',
            bindToController: true,
            scope: {
                input: "="
            },
            link: Link
        };
        return exports;

        function Link(scope, ele, attr) {}
    }
})();
