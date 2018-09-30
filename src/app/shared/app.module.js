(function () {
    'use strict';

    angular
        .module('Application', [
            'ngCookies',
            'ngSanitize',
            'ngStorage',
            'ui.router',
            'ncy-angular-breadcrumb',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'oc.lazyLoad',
            'toastr',
            'uiGmapgoogle-maps',
            'pascalprecht.translate',
            'tmh.dynamicLocale',
            'ngTextTruncate'
        ]);
})();
