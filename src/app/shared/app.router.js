﻿(function () {
    'use strict';

    angular
        .module("Application")
        .run(Run)
        .config(Config);

    // Run
    Run.$inject = ['$rootScope', '$state', '$stateParams', '$window', '$location'];

    function Run($rootScope, $state, $stateParams, $window, $location) {
        $rootScope.IsInternetOnline = true;
        // Internet Check
        $window.addEventListener("offline", function () {
            $rootScope.$apply(function () {
                $rootScope.IsInternetOnline = false;
            });
        }, false);

        $window.addEventListener("online", function () {
            $rootScope.$apply(function () {
                $rootScope.IsInternetOnline = true;
            });
        }, false);

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.EnteredUrl = undefined;
        $rootScope.EnteredUrl = $location.path();
    }

    // Configuration for route
    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider', 'APP_CONSTANT', 'toastrConfig'];

    function Config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, APP_CONSTANT, toastrConfig) {
        $httpProvider.interceptors.push('apiInterceptors');

        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container-new',
            maxOpened: 0,
            newestOnTop: true,
            // positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body',
            allowHtml: true,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            extendedTimeOut: 5000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 5000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });

        $ocLazyLoadProvider.config({
            debug: false,
            events: false,
            serie: false,
            modules: APP_CONSTANT.ocLazyLoadModules
        });

        $urlRouterProvider
            .otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: "LoginController as LoginCtrl",
                ncyBreadcrumb: {
                    label: 'Login'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        pageAccessService.CheckAccess("/login").then(function (response) {
                            if (response == true) {
                                deferred.resolve();
                            }
                        });
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(['Login']);
                    }]
                },
                onEnter: function () {},
                onExit: function ($rootScope) {
                    $rootScope.EnteredUrl = undefined;
                }
            })
            .state('tenantList', {
                url: '/tenant-list',
                templateUrl: 'app/tenant-list/tenant-list.html',
                controller: "TenantListController as TenantListCtrl",
                ncyBreadcrumb: {
                    label: 'Tenant'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        // pageAccessService.CheckAccess("/tenant-list").then(function (response) {
                        //     if (response == true) {
                        //         deferred.resolve();
                        //     }
                        // });
                        deferred.resolve();
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(['TenantList']);
                    }]
                }
            })
            .state('partyList', {
                url: '/party-list',
                templateUrl: 'app/party-list/party-list.html',
                controller: "PartyListController as PartyListCtrl",
                ncyBreadcrumb: {
                    label: 'Party'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        // pageAccessService.CheckAccess("/party-list").then(function (response) {
                        //     if (response == true) {
                        //         deferred.resolve();
                        //     }
                        // });
                        deferred.resolve();
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(['PartyList']);
                    }]
                }
            })
            .state('roleList', {
                url: '/role-list',
                templateUrl: 'app/role-list/role-list.html',
                controller: "RoleListController as RoleListCtrl",
                ncyBreadcrumb: {
                    label: 'Role'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        // pageAccessService.CheckAccess("/role-list").then(function (response) {
                        //     if (response == true) {
                        //         deferred.resolve();
                        //     }
                        // });
                        deferred.resolve();
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(['RoleList']);
                    }]
                }
            })
            .state('userSettings', {
                url: '/user-settings',
                templateUrl: 'app/user-setting/user-setting.html',
                controller: "UserSettingController as UserSettingCtrl",
                ncyBreadcrumb: {
                    label: 'User Setting'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        pageAccessService.CheckAccess("/user-settings").then(function (response) {
                            if (response == true) {
                                deferred.resolve();
                            }
                        });
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(['navBar', 'navbarDropdownMenu', 'sideBar', 'changePassword', 'userSetting']);
                    }]
                }
            })
            .state('externalUrlRedirect', {
                url: '/external-url-redirect',
                templateUrl: 'app/shared/external-url-redirect/external-url-redirect.html',
                controller: "ExternalUrlRedirectController as ExternalUrlRedirectCtrl",
                ncyBreadcrumb: {
                    label: 'External Url'
                },
                resolve: {
                    CheckAccess: ["$q", function ($q) {
                        var deferred = $q.defer();
                        deferred.resolve();
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(['ExternalUrlRedirect']);
                    }]
                }
            });
    }
})();
