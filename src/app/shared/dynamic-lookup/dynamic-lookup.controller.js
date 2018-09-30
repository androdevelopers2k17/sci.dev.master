(function () {
    "use strict";

    angular
        .module("Application")
        .controller("DynamicLookupController", DynamicLookupController);

    DynamicLookupController.$inject = ["apiService", "helperService", "dynamicLookupConfig"];

    function DynamicLookupController(apiService, helperService, dynamicLookupConfig) {
        var DynamicLookupCtrl = this;

        function Init() {
            DynamicLookupCtrl.ePage = {
                "Title": "",
                "Prefix": "Dynamic_Lookup",
                "Masters": {},
                "Meta": helperService.metaBase(),
                "Entities": dynamicLookupConfig.Entities
            };

            DynamicLookupCtrl.ePage.Masters.GetAutoCompleteList = GetAutoCompleteList;
            DynamicLookupCtrl.ePage.Masters.OnChangeLookup = OnChangeLookup;
            DynamicLookupCtrl.ePage.Masters.AutoCompleteOnSelect = AutoCompleteOnSelect;

            (DynamicLookupCtrl.isEditable == true) ? DynamicLookupCtrl.IsEditable = true: DynamicLookupCtrl.IsEditable = false;
        }

        function GetAutoCompleteList($viewValue) {
            var _index = -1;
            for (var x in dynamicLookupConfig.Entities) {
                (DynamicLookupCtrl.controlKey) ? _index = x.indexOf(DynamicLookupCtrl.controlKey): _index = x.indexOf(DynamicLookupCtrl.controlId);

                if (_index !== -1) {
                    DynamicLookupCtrl.ePage.Masters.LookupConfig = dynamicLookupConfig.Entities[x];
                }
            }

            DynamicLookupCtrl.ePage.Masters.LookupConfig.setValues.map(function (val, key) {
                DynamicLookupCtrl.ePage.Masters.LookupConfig.defaults[val.sField] = DynamicLookupCtrl.obj[val.eField]
            });

            if (DynamicLookupCtrl.obj) {
                DynamicLookupCtrl.ePage.Masters.LookupConfig.PossibleFilters.map(function (value, key) {
                    if (value.FieldName != DynamicLookupCtrl.ePage.Masters.LookupConfig.UIDisplay) {
                        if (DynamicLookupCtrl.obj[value.FieldName] != undefined) {
                            if (DynamicLookupCtrl.obj[value.FieldName]) {
                                value.value = DynamicLookupCtrl.obj[value.FieldName];
                            } else {
                                value.value = "";
                            }
                        }
                    } else {
                        value.value = $viewValue;
                    }
                });
            }

            var _input = {
                FilterID: DynamicLookupCtrl.ePage.Masters.LookupConfig.FilterID,
                SearchInput: helperService.createToArrayOfObject(DynamicLookupCtrl.ePage.Masters.LookupConfig.defaults)
            };
            _input.SearchInput.push(DynamicLookupCtrl.ePage.Masters.LookupConfig.PossibleFilters[0]);

            var _filterAPIArray = DynamicLookupCtrl.ePage.Masters.LookupConfig.FilterAPI.split("/");
            var _isFindLookup = _filterAPIArray[_filterAPIArray.length - 2] === "FindLookup" ? true : false;

            if (_isFindLookup) {
                var _api = _filterAPIArray.slice(0, -1).join("/");
                _input.DBObjectName = DynamicLookupCtrl.ePage.Masters.LookupConfig.FilterAPI.split("/").pop();
            } else {
                _api = DynamicLookupCtrl.ePage.Masters.LookupConfig.FilterAPI;
            }

            return apiService.post("eAxisAPI", _api, _input).then(function (response) {
                return response.data.Response;
            });
        }

        function OnChangeLookup() {
            DynamicLookupCtrl.ePage.Masters.IsLoading = false;
            DynamicLookupCtrl.ePage.Masters.NoRecords = false;

            if (!DynamicLookupCtrl.myNgModel) {
                if (DynamicLookupCtrl.ePage.Masters.LookupConfig.getValues) {
                    for (var j = 0; j < DynamicLookupCtrl.ePage.Masters.LookupConfig.getValues.length; j++) {
                        DynamicLookupCtrl.obj[DynamicLookupCtrl.ePage.Masters.LookupConfig.getValues[j].eField] = undefined;
                    }
                }
            }
        }

        function AutoCompleteOnSelect($item, $model, $label) {
            if (DynamicLookupCtrl.ePage.Masters.LookupConfig.getValues) {
                for (var j = 0; j < DynamicLookupCtrl.ePage.Masters.LookupConfig.getValues.length; j++) {
                    DynamicLookupCtrl.obj[DynamicLookupCtrl.ePage.Masters.LookupConfig.getValues[j].eField] = $item[DynamicLookupCtrl.ePage.Masters.LookupConfig.getValues[j].sField];
                }
            }

            DynamicLookupCtrl.autoCompleteOnSelect({
                $item: $item
            });
        }

        Init();
    }
})();
