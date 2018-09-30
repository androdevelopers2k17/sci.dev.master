(function () {
    "use strict";

    angular
        .module("Application")
        .controller("NavBarController", NavBarController);

    NavBarController.$inject = ["$location", "$timeout", "authService", "apiService", "helperService", "appConfig", "LocaleService"];

    function NavBarController($location, $timeout, authService, apiService, helperService, appConfig, LocaleService) {
        /* jshint validthis: true */
        var NavBarCtrl = this;

        function Init() {
            NavBarCtrl.ePage = {
                "Title": "",
                "Prefix": "NavBar",
                "Masters": {},
                "Meta": helperService.metaBase(),
                "Entities": {}
            };

            NavBarCtrl.ePage.Masters.userProfile = {
                "DisplayName": authService.getUserInfo().DisplayName,
                "UserId": authService.getUserInfo().UserId,
                "UserEmail": authService.getUserInfo().UserEmail,
                "Photo": authService.getUserInfo().Logo.User
            };

            NavBarCtrl.ePage.Masters.ApplicationLogo = authService.getUserInfo().Logo.Application;

            NavBarCtrl.ePage.Masters.Logout = Logout;
            NavBarCtrl.ePage.Masters.RedirectToHomeLogo = RedirectToHomeLogo;
            NavBarCtrl.ePage.Masters.GoToHelp = GoToHelp;

            InitMenu();
            InitSwitchTRP();

            if (authService.getUserInfo().AppCode == "EA") {
                // InitLanguage();
                InitNotification();
            }
        }

        function InitMenu() {
            NavBarCtrl.ePage.Masters.Menu = {};

            (authService.getUserInfo().AppCode == "EA") ? (NavBarCtrl.ePage.Masters.Menu.VisibleType = authService.getUserInfo().Menu.VisibleType) : (NavBarCtrl.ePage.Masters.Menu.VisibleType = "Grid");

            NavBarCtrl.ePage.Masters.Menu.ListSource = authService.getUserInfo().Menu.ListSource;
        }

        function Logout() {
            apiService.logout();
        }

        function RedirectToHomeLogo() {
            if (authService.getUserInfo().InternalUrl) {
                $location.path(authService.getUserInfo().InternalUrl);
            }
        }

        function GoToHelp() {
            window.open("#/help/topic", "_blank");
        }

        // ==========================Language Start==========================
        function InitLanguage() {
            NavBarCtrl.ePage.Masters.Language = {};
            NavBarCtrl.ePage.Masters.Language.OnLanguageChange = OnLanguageChange;

            NavBarCtrl.ePage.Masters.Language.ListSource = authService.getUserInfo().LanguageList;

            if (NavBarCtrl.ePage.Masters.Language.ListSource) {
                if (NavBarCtrl.ePage.Masters.Language.ListSource.length > 0) {
                    SetLanguageList();
                } else {
                    GetLanguageList();
                }
            } else {
                GetLanguageList();
            }
        }

        function GetLanguageList() {
            var _filter = {
                "TenantCode": authService.getUserInfo().TenantCode,
                "SAP_FK": authService.getUserInfo().AppPK,
                "EntitySource": "LANGUAGE"
            };
            var _input = {
                "searchInput": helperService.createToArrayOfObject(_filter),
                "FilterID": appConfig.Entities.AppSettings.API.FindAll.FilterID
            };

            apiService.post("eAxisAPI", appConfig.Entities.AppSettings.API.FindAll.Url + authService.getUserInfo().AppPK, _input).then(function SuccessCallback(response) {
                if (response.data.Response) {
                    NavBarCtrl.ePage.Masters.Language.ListSource = response.data.Response;

                    if (NavBarCtrl.ePage.Masters.Language.ListSource.length > 0) {
                        var _userInfo = authService.getUserInfo();
                        _userInfo.LanguageList = NavBarCtrl.ePage.Masters.Language.ListSource;

                        $timeout(function () {
                            authService.setUserInfo(helperService.encryptData(_userInfo));
                            SetLanguageList();
                        });
                    } else {
                        OnLanguageChange();
                    }
                } else {
                    NavBarCtrl.ePage.Masters.Language.ListSource = [];
                }
            });
        }

        function SetLanguageList() {
            var CurrentLang = NavBarCtrl.ePage.Masters.Language.ListSource.find(function (obj) {
                return obj.Key === localStorage.getItem('NG_TRANSLATE_LANG_KEY');
            });

            if (CurrentLang) {
                OnLanguageChange(CurrentLang);
            } else {
                OnLanguageChange(NavBarCtrl.ePage.Masters.Language.ListSource[0]);
            }
        }

        function OnLanguageChange($item) {
            if ($item) {
                NavBarCtrl.ePage.Masters.Language.ActiveLanguage = $item;
                LocaleService.setLocaleByDisplayName($item.Key);
            }
        }
        // ==========================Language End==========================

        // ==========================Notification Start==========================
        function InitNotification() {
            NavBarCtrl.ePage.Masters.Notification = {};
            if (authService.getUserInfo().AppCode == "EA") {
                GetWorkItemCount();
            }
        }

        function GetWorkItemCount() {
            var _filter = {
                "Performer": authService.getUserInfo().UserId,
                "Status": "AVAILABLE,ASSIGNED"
            };
            var _input = {
                "searchInput": helperService.createToArrayOfObject(_filter),
                "FilterID": appConfig.Entities.EBPMWorkItem.API.FindAllCount.FilterID
            };

            apiService.post("eAxisAPI", appConfig.Entities.EBPMWorkItem.API.FindAllCount.Url, _input).then(function (response) {
                if (response.data.Response != undefined) {
                    NavBarCtrl.ePage.Masters.Notification.WorkItemCount = response.data.Response;
                }
            });
        }
        // ==========================Notification End==========================

        function InitSwitchTRP() {
            // TRP - Tenant,Role,Party
            NavBarCtrl.ePage.Masters.SwitchTRP = {};
            NavBarCtrl.ePage.Masters.SwitchTRP.SwitchTenant = SwitchTenant;
            NavBarCtrl.ePage.Masters.SwitchTRP.SwitchParty = SwitchParty;
            NavBarCtrl.ePage.Masters.SwitchTRP.SwitchRole = SwitchRole;

            NavBarCtrl.ePage.Masters.SwitchTRP.IsShowSwitchTenant = false;
            NavBarCtrl.ePage.Masters.SwitchTRP.IsShowSwitchParty = false;
            NavBarCtrl.ePage.Masters.SwitchTRP.IsShowSwitchRole = false;

            if (authService.getUserInfo().IsSingleTenant == false) {
                NavBarCtrl.ePage.Masters.SwitchTRP.IsShowSwitchTenant = true;
            }
            if (authService.getUserInfo().Parties) {
                if (authService.getUserInfo().Parties.length > 1) {
                    NavBarCtrl.ePage.Masters.SwitchTRP.IsShowSwitchParty = true;
                }
            }
            if (authService.getUserInfo().Roles) {
                if (authService.getUserInfo().Roles.length > 1) {
                    NavBarCtrl.ePage.Masters.SwitchTRP.IsShowSwitchRole = true;
                }
            }

            NavBarCtrl.ePage.Masters.ActiveTenant = authService.getUserInfo().TenantName;
            NavBarCtrl.ePage.Masters.ActiveParty = authService.getUserInfo().PartyName;
            NavBarCtrl.ePage.Masters.ActiveRole = authService.getUserInfo().RoleName;
        }

        function SwitchTenant() {
            var _queryString = {
                Username: authService.getUserInfo().UserId,
                Token: authService.getUserInfo().AuthToken,
                Continue: $location.path(),
            };
            $location.path("/tenant-list").search("q", helperService.encryptData(_queryString));
        }

        function SwitchParty() {
            var _queryString = {
                Token: authService.getUserInfo().AuthToken,
                Continue: $location.path(),
                // Continue: "/EA/freight/shipment",
            };
            $location.path("/party-list").search("q", helperService.encryptData(_queryString));
        }

        function SwitchRole() {
            var _queryString = {
                Token: authService.getUserInfo().AuthToken,
                Continue: $location.path(),
            };
            $location.path("/role-list").search("q", helperService.encryptData(_queryString));
        }

        Init();
    }
})();
