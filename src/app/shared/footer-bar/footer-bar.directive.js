(function () {
    "use strict";

    angular
        .module("Application")
        .directive("footerBar", FooterBar);

    FooterBar.$inject = ["$templateCache", "authService"];

    function FooterBar($templateCache, authService) {
        var _template = ` <footer class="footer-bar-container">
            <div class="footer-copyright-text" data-ng-bind-html="CopyrightText"></div>
            <div class="footer-tenant-name" data-ng-bind-html="TenantName + (RoleName ? (' | ' + RoleName) : '') + (PartyName ? (' | ' + PartyName) : '')"></div>
        </footer>`;
        $templateCache.put("FooterBar.html", _template);

        var exports = {
            restrict: "EA",
            templateUrl: "FooterBar.html",
            scope: {},
            link: Link
        };
        return exports;

        function Link(scope, ele, attr) {
            var _curYear = new Date().getFullYear();
            scope.CopyrightText = "Copyright &copy; " + _curYear + " Myhub Plus. All Rights Reserved.";
            scope.TenantName = authService.getUserInfo().TenantName;
            scope.RoleName = authService.getUserInfo().RoleName;
            scope.PartyName = authService.getUserInfo().PartyName;
        }
    }
})();
