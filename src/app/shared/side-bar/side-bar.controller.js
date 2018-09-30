(function () {
    "use strict";

    angular
        .module("Application")
        .controller("SideBarController", SideBarController);

    SideBarController.$inject = ["$location", "authService", "helperService"];

    function SideBarController($location, authService, helperService) {
        /* jshint validthis: true */
        var SideBarCtrl = this;

        function Init() {
            SideBarCtrl.ePage = {
                "Title": "",
                "Prefix": "SideBarBar",
                "Masters": {},
                "Meta": helperService.metaBase(),
                "Entities": {}
            };

            SideBarCtrl.ePage.Masters.CurrentActiveMenu = CurrentActiveMenu;
            SideBarCtrl.ePage.Masters.MenuList = authService.getUserInfo().Menu.ListSource;

            SetDefaultActiveMenu();
        }

        function SetDefaultActiveMenu() {
            var _defaultActiveMenu = {
                Link: $location.path(),
                MenuName: $location.path().split("/").pop()
            };
            CurrentActiveMenu(_defaultActiveMenu);
        }

        function CurrentActiveMenu(currentMenu) {
            if (currentMenu.Link.split("/").length > 0) {
                SideBarCtrl.ePage.Masters.currentMenuItem = currentMenu.MenuName;
            }
        }

        Init();
    }
})();
