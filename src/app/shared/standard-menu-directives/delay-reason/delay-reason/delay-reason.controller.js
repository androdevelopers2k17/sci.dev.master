(function () {
    "use strict";

    angular
        .module("Application")
        .controller("DelayReasonController", DelayReasonController);

    DelayReasonController.$inject = ["helperService"];

    function DelayReasonController(helperService) {
        /* jshint validthis: true */
        var DelayReasonCtrl = this;

        function Init() {
            DelayReasonCtrl.ePage = {
                "Title": "",
                "Prefix": "DelayReason",
                "Masters": {},
                "Meta": helperService.metaBase(),
                "Entities": DelayReasonCtrl.input
            };

            if (DelayReasonCtrl.ePage.Entities) {}
        }

        Init();
    }
})();
