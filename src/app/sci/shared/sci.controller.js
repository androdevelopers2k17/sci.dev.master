(function () {
    "use strict";

    angular
        .module("Application")
        .controller("SciController", SciController);

    SciController.$inject = [];

    function SciController() {
        /* jshint validthis: true */
        var SciCtrl = this;


        Init();
    }
})();
