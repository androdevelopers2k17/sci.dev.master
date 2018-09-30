(function () {
    "use strict";

    angular
        .module('Application')
        .controller('ExternalUrlRedirectController', ExternalUrlRedirectController);

    ExternalUrlRedirectController.$inject = ["helperService"];

    function ExternalUrlRedirectController(helperService) {
        var ExternalUrlRedirectCtrl = this;

        function Init() {
            ExternalUrlRedirectCtrl.ePage = {
                "Title": "",
                "Prefix": "ExternalUrlRedirect",
                "Masters": {},
                "Meta": helperService.metaBase(),
                "Entities": {}
            };
        }

        Init();
    }

})();
