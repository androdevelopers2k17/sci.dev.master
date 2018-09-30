(function () {
    "use strict";

    angular
        .module('Application')
        .controller('TCGridController', TCGridController);

    TCGridController.$inject = ["helperService", "appConfig", "apiService", "APP_CONSTANT"];

    function TCGridController(helperService, appConfig, apiService, APP_CONSTANT) {
        var TCGridCtrl = this;

        function Init() {
            TCGridCtrl.ePage = {
                "Title": "",
                "Prefix": "TC Grid",
                "Masters": {},
                "Meta": helperService.metaBase(),
                "Entities": {}
            };

            InitTCGrid();
        }

        function InitTCGrid() {
            TCGridCtrl.ePage.Masters.AddNew = AddNew;
            TCGridCtrl.ePage.Masters.SelectedGridRow = SelectedGridRow;

            if (TCGridCtrl.attributeDetails) {
                TCGridCtrl.ePage.Masters.AttributeDetails = angular.copy(TCGridCtrl.attributeDetails);

                if (TCGridCtrl.ePage.Masters.AttributeDetails.Options) {
                    if (typeof TCGridCtrl.ePage.Masters.AttributeDetails.Options == "string") {
                        TCGridCtrl.ePage.Masters.AttributeDetails.Options = JSON.parse(TCGridCtrl.ePage.Masters.AttributeDetails.Options);
                    }
                }
            }

            if (TCGridCtrl.searchInput) {
                TCGridCtrl.ePage.Masters.SearchInput = [];
                if (typeof TCGridCtrl.searchInput == "string") {
                    var _searchInput = angular.copy(JSON.parse(TCGridCtrl.searchInput));
                    TCGridCtrl.ePage.Masters.SearchInput = _searchInput;
                }
            }

            if (TCGridCtrl.dataentryName) {
                GetDataEntryDetails();
            }
        }

        function GetDataEntryDetails() {
            TCGridCtrl.ePage.Masters.DataEntry = undefined;
            var _filter = {
                DataEntryName: TCGridCtrl.dataentryName,
                IsRoleBassed: "false",
                IsAccessBased: "false"
            };

            var _input = {
                "searchInput": helperService.createToArrayOfObject(_filter),
                "FilterID": appConfig.Entities.DataEntry.API.FindConfig.FilterID
            };

            apiService.post("eAxisAPI", appConfig.Entities.DataEntry.API.FindConfig.Url, _input).then(function (response) {
                if (response.data.Response) {
                    var _isEmpty = angular.equals({}, response.data.Response);
                    if (!_isEmpty) {
                        var _response = response.data.Response;
                        var _defaultFilter = [];

                        var _gridOptions = angular.copy(_response.OtherConfig.GridOptions);
                        _gridOptions.paginationPageSize = JSON.parse(_gridOptions.paginationPageSize);
                        _gridOptions.paginationPageSizes = JSON.parse(_gridOptions.paginationPageSizes);
                        _gridOptions.headerRowHeight = JSON.parse(_gridOptions.headerRowHeight);
                        _gridOptions.rowHeight = JSON.parse(_gridOptions.rowHeight);
                        _gridOptions.gridMenuCustomItems = JSON.parse(_gridOptions.gridMenuCustomItems);

                        TCGridCtrl.ePage.Masters.GridOptions =_gridOptions;

                        if (TCGridCtrl.ePage.Masters.AttributeDetails.Options.Delete == "true") {
                            var _delete = {
                                field: "delete",
                                displayName: "",
                                cellTemplate: `<div class='ui-grid-cell-contents text-single-line text-center' title="Remove"><a href='javascript:void(0);' ng-click='grid.appScope.GridCtrl.ePage.Masters.SelectedGridRow(row, "delete")'><i class='grid-cell-icon fa fa-trash'></i></a></div>`,
                                width: 35,
                                IsMandatory: true,
                                IsVisible: true
                            };
                            _response.GridConfig.Header.push(_delete);
                            _response.GridConfig.Header.splice(0, 0, _response.GridConfig.Header.splice(_response.GridConfig.Header.length - 1, 1)[0]);
                        }

                        if (TCGridCtrl.ePage.Masters.AttributeDetails.Options.Edit == "true") {
                            var _edit = {
                                field: "edit",
                                displayName: "",
                                cellTemplate: `<div class='ui-grid-cell-contents text-single-line text-center' title="Edit"><a href='javascript:void(0);' ng-click='grid.appScope.GridCtrl.ePage.Masters.SelectedGridRow(row, "edit")'><i class='grid-cell-icon fa fa-pencil-square-o'></i></a></div>`,
                                width: 35,
                                IsMandatory: true,
                                IsVisible: true
                            };
                            _response.GridConfig.Header.push(_edit);
                            _response.GridConfig.Header.splice(0, 0, _response.GridConfig.Header.splice(_response.GridConfig.Header.length - 1, 1)[0]);
                        }

                        if (TCGridCtrl.ePage.Masters.AttributeDetails.Options.Pagination == "false") {
                            _response.OtherConfig.Pagination = {};
                            TCGridCtrl.ePage.Masters.GridOptions.paginationPageSize = undefined;
                            TCGridCtrl.ePage.Masters.GridOptions.paginationPageSizes = undefined;
                            TCGridCtrl.ePage.Masters.GridOptions.useExternalPagination = false;
                            TCGridCtrl.ePage.Masters.GridOptions.enablePaginationControls = false
                        }

                        if (TCGridCtrl.ePage.Masters.SearchInput.Criteria.length > 0) {
                            TCGridCtrl.ePage.Masters.SearchInput.Criteria.map(function (value, key) {
                                if (value.FieldName && value.ValueRef) {
                                    if (value.ParentRef == "false") {
                                        var _obj = {
                                            FieldName: value.FieldName,
                                            Value: value.ValueRef
                                        }
                                        _defaultFilter.push(_obj);
                                    } else if (value.ParentRef == "true") {
                                        TCGridCtrl.entity.map(function (value2, key2) {
                                            if (value2.EntityName == value.EntityName) {
                                                if (value2.Data[value.ValueRef]) {
                                                    var _obj = {
                                                        FieldName: value.FieldName,
                                                        Value: value2.Data[value.ValueRef]
                                                    }
                                                    _defaultFilter.push(_obj);
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        _response.Filter = _defaultFilter;

                        TCGridCtrl.ePage.Masters.DefaultFilter = _defaultFilter;

                        if (_defaultFilter.length > 0) {
                            TCGridCtrl.ePage.Masters.DataEntry = _response;
                        }
                    }
                }
            });
        }

        function AddNew() {
            var _obj = {
                data: {},
                action: "new"
            };
            SelectedGridRow(_obj);
        }

        function SelectedGridRow($item) {
            var _item = $item;
            _item.DataEntry = TCGridCtrl.ePage.Masters.DataEntry;
            TCGridCtrl.selectedGridRow({
                $item: _item
            });
        }

        Init();
    }

})();
