(function () {
    "use strict";

    angular
        .module("Application")
        .controller("StandardMenuController", StandardMenuController);

    StandardMenuController.$inject = ["helperService"];

    function StandardMenuController(helperService) {
        /* jshint validthis: true */
        var StandardMenuCtrl = this;

        function Init() {
            var _entity = StandardMenuCtrl.input[StandardMenuCtrl.input.label].ePage.Entities;
            StandardMenuCtrl.ePage = {
                "Title": "",
                "Prefix": "StandardMenu",
                "Masters": {},
                "Meta": helperService.metaBase(),
                "Entities": _entity
            };

            GetStandardMenuList();
        }

        function GetStandardMenuList() {
            StandardMenuCtrl.ePage.Masters.MenuList = [{
                "Name": "comment",
                "DisplayName": "Comment",
                "Icon": "fa fa-comments"
            }, {
                "Name": "document",
                "DisplayName": "Document",
                "Icon": "fa fa-file"
            }, {
                "Name": "email",
                "DisplayName": "Email",
                "Icon": "fa fa-envelope"
            }, {
                "Name": "email-template-creation",
                "DisplayName": "Email Template",
                "Icon": "fa fa-envelope"
            }, {
                "Name": "exception",
                "DisplayName": "Exception",
                "Icon": "fa fa-warning"
            }, {
                "Name": "email-group",
                "DisplayName": "Email Group",
                "Icon": "fa fa-envelope"
            }, {
                "Name": "event",
                "DisplayName": "Event",
                "Icon": "fa fa-calendar"
            }, {
                "Name": "audit-log",
                "DisplayName": "Audit Log",
                "Icon": "fa fa-user"
            }, {
                "Name": "integration",
                "DisplayName": "Integration",
                "Icon": "fa fa-user"
            }, {
                "Name": "task",
                "DisplayName": "Task",
                "Icon": "fa fa-user"
            }, {
                "Name": "event-data",
                "DisplayName": "Data Event",
                "Icon": "fa fa-calendar"
            }, {
                "Name": "keyword",
                "DisplayName": "Keywords",
                "Icon": "fa fa-tag"
            }, {
                "Name": "parties",
                "DisplayName": "Parties",
                "Icon": "fa fa-gift"
            }];

            ConfigureStandardMenuObject();
        }

        function ConfigureStandardMenuObject() {
            StandardMenuCtrl.ePage.Masters.StandardMenuInput = {
                // Entity
                "EntityRefKey": StandardMenuCtrl.ePage.Entities.Header.Data.PK,
                "EntityRefCode": StandardMenuCtrl.input.label,
                "EntitySource": StandardMenuCtrl.dataentryObject.OtherConfig.ListingPageConfig.EntitySource,
                // Parent Entity
                "ParentEntityRefKey": undefined,
                "ParentEntityRefCode": undefined,
                "ParentEntitySource": undefined,
                // Additional Entity
                "AdditionalEntityRefKey": undefined,
                "AdditionalEntityRefCode": undefined,
                "AdditionalEntitySource": undefined,
                "RowObj": StandardMenuCtrl.ePage.Entities.Header.Data,
                "Entity": StandardMenuCtrl.dataentryObject.OtherConfig.ListingPageConfig.EntityName
            };

            if (StandardMenuCtrl.dataentryObject.OtherConfig.ListingPageConfig.EnableStandardToolbar) {
                StandardMenuCtrl.ePage.Masters.StandardMenuInput.Config = StandardMenuCtrl.dataentryObject.OtherConfig.ListingPageConfig.StandardToolbar.ToolList;
            }
        }

        Init();
    }
})();
