(function () {
    "use strict";

    angular
        .module("Application")
        .directive("standardMenu", StandardMenu);

    StandardMenu.$inject = ["$templateCache"];

    function StandardMenu($templateCache) {
        var _template = `<div class="clearfix standard-menu-wrapper">
            <div class="eaxis-footer-left">
                <ul>
                    <li data-ng-repeat="x in StandardMenuCtrl.ePage.Masters.MenuList" data-ng-if="StandardMenuCtrl.ePage.Masters.StandardMenuInput.Config[x.Name]">
                        <a href="javascript:void(0);" compile-dynamic-directive-standard-menu obj="x" input="StandardMenuCtrl.ePage.Masters.StandardMenuInput"></a>
                    </li>
                </ul>
            </div>
        </div>`;
        $templateCache.put("StandardMenu.html", _template);

        var exports = {
            restrict: "EA",
            templateUrl: "StandardMenu.html",
            controller: "StandardMenuController",
            controllerAs: "StandardMenuCtrl",
            bindToController: true,
            scope: {
                input: "=",
                dataentryObject: "="
            },
            link: Link
        };
        return exports;

        function Link(scope, ele, attr) {}
    }

    angular
        .module('Application')
        .directive('compileDynamicDirectiveStandardMenu', CompileDynamicDirectiveStandardMenu);

    function CompileDynamicDirectiveStandardMenu($compile) {
        var exports = {
            restrict: 'A',
            scope: {
                obj: '=',
                input: "="
            },
            link: Link
        };
        return exports;

        function Link(scope, elem, attrs) {
            var template = '<a href="javascript:void(0);" ' + scope.obj.Name + '-modal input="input" mode="1" type=""><i class="eaxis-footer-icon {{obj.Icon}}"></i><span class="eaxis-footer-text" data-ng-bind="obj.DisplayName"></span> </a>';
            var _element = angular.element(template);
            var _template = $compile(_element)(scope);
            elem.replaceWith(_template);
        }
    }
})();
