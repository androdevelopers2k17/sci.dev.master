(function () {
    "use strict";

    angular
        .module("Application")
        .directive("navBar", NavBar);

    NavBar.$inject = [];

    function NavBar() {
        var exports = {
            restrict: "EA",
            templateUrl: "app/shared/nav-bar/nav-bar.html",
            controller: "NavBarController",
            controllerAs: "NavBarCtrl",
            bindToController: true,
            scope: {},
            link: Link
        };
        return exports;

        function Link(scope, ele, attr) {}
    }
})();
