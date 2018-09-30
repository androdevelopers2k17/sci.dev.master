(function () {
    "use strict";

    angular
        .module("Application")
        .controller("ChecklistController", ChecklistController);

    ChecklistController.$inject = ["helperService"];

    function ChecklistController(helperService) {
        /* jshint validthis: true */
        var ChecklistCtrl = this;

        function Init() {
            ChecklistCtrl.ePage = {
                "Title": "",
                "Prefix": "Checklist",
                "Masters": {},
                "Meta": helperService.metaBase(),
                "Entities": ChecklistCtrl.input
            };

            if (ChecklistCtrl.ePage.Entities) {}
        }

        Init();
    }
})();
