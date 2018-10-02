(function () {
    'use strict';

    var sci_CONSTANT = {
        ocLazyLoadModules: [
            // region sci
            {
                name: 'SCI',
                files: [
                    'app/sci/shared/sci.css',
                    'app/sci/shared/sci.controller.js'
                ]
            }
        ]
    };

    angular
        .module("Application")
        .constant("SCI_CONSTANT", SCI_CONSTANT);
})();
