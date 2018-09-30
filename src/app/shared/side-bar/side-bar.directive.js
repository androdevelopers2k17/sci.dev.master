(function () {
    "use strict";

    angular
        .module("Application")
        .directive("sideBar", SideBar);

    SideBar.$inject = [];

    function SideBar() {
        var exports = {
            restrict: "EA",
            templateUrl: "app/shared/side-bar/side-bar.html",
            controller: "SideBarController",
            controllerAs: "SideBarCtrl",
            bindToController: true,
            scope: {},
            link: Link
        };
        return exports;

        function Link(scope, ele, attr) {}
    }
})();
