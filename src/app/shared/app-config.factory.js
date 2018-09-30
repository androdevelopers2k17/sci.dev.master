(function () {
    "use strict";

    angular
        .module("Application")
        .factory('appConfig', AppConfig);

    AppConfig.$inject = [];

    function AppConfig() {
        var exports = {
            "Entities": {
                "Token": {
                    "RowIndex": -1,
                    "API": {
                        "token": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "token"
                        },
                        "SoftLoginToken": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "Token/SoftLoginToken"
                        },
                        "Logout": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "Token/Logout"
                        },
                        "PublishPrivilegesByUser": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "Token/PublishPrivilegesByUser"
                        }
                    }
                },
                "UsePrivileges": {
                    "RowIndex": -1,
                    "API": {
                        "PublishPrivilegesByUser": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "UsePrivileges/PublishPrivilegesByUser"
                        }
                    }
                },
                "SecApp": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecApp/FindAll",
                            "FilterID": "SECAPP"
                        },
                        "FindAllAccess": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecApp/FindAllAccess",
                            "FilterID": "SECAPP"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecApp/Upsert"
                        }
                    }
                },
                "SecAppUrl": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecAppUrl/FindAll",
                            "FilterID": "SECAPUL"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecAppUrl/Upsert"
                        }
                    }
                },
                "SecMappings": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecMappings/FindAll",
                            "FilterID": "SECMAPP"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecMappings/GetColumnValuesWithFilters",
                            "FilterID": "SECMAPP"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecMappings/Upsert"
                        },
                        "GetPartiesByUserName": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "SecMappings/GetPartiesByUserName/"
                        },
                        "GetRoleByUserName": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "SecMappings/GetRoleByUserName/"
                        },
                        "ListPKDelete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "SecMappings/ListPKDelete/"
                        },
                        "FindAllTenantByUser": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecMappings/FindAllTenantByUser",
                            "FilterID": "SECMAPP"
                        },
                        "UpsertUserWithRole": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecMappings/UpsertUserWithRole"
                        }
                    }
                },
                "SecTenant": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecTenant/FindAll",
                            "FilterID": "SECTENA"
                        },
                        "MasterFindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecTenant/MasterFindAll",
                            "FilterID": "SECTENA"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecTenant/Upsert"
                        },
                        "GetByTenant": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "SecTenant/GetByTenant/"
                        },
                        "CopyBaseTenantBehavior": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecTenant/CopyBaseTenantBehavior",
                            "FilterID": "SECTENA"
                        }
                    }
                },
                "SecOperation": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecOperation/FindAll",
                            "FilterID": "SECOPER"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecOperation/GetColumnValuesWithFilters",
                            "FilterID": "SECOPER"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecOperation/Upsert"
                        }
                    }
                },
                "UserExtended": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "UserExtended/FindAll",
                            "FilterID": "USEREXT"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "UserExtended/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "UserExtended/Update"
                        }
                    }
                },
                "SecUserSession": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecUserSession/FindAll",
                            "FilterID": "SECSESU"
                        }
                    }
                },
                "SecLoginHistory": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecLoginHistory/FindAll",
                            "FilterID": "SECLOGI"
                        }
                    }
                },
                "SecSessionActivity": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecSessionActivity/FindAll",
                            "FilterID": "SECSESS"
                        }
                    }
                },
                "NLog": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "NLog/FindAll",
                            "FilterID": "NLOG"
                        }
                    }
                },
                "ElmahError": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ElmahError/FindAll",
                            "FilterID": "ELMAHERR"
                        }
                    }
                },
                "SecTenantUserMapping": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecTenantUserMapping/FindAll",
                            "FilterID": "SETUSM"
                        }
                    }
                },
                "AuthTrust": {
                    "RowIndex": -1,
                    "API": {
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "AuthTrust/GetColumnValuesWithFilters",
                            "FilterID": "AUTHTRU"
                        }
                    }
                },
                "User": {
                    "RowIndex": -1,
                    "API": {
                        "ChangePassword": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "User/ChangePassword"
                        }
                    }
                },
                "HomeMenuUserRoleAccess": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "HomeMenuUserRoleAccess/FindAll",
                            "FilterID": "HOMURA"
                        }
                    }
                },
                "CompUserRoleAccess": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CompUserRoleAccess/FindAll",
                            "FilterID": "COMURA"
                        }
                    }
                },
                "ComFilterGroup": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ComFilterGroup/FindAll",
                            "FilterID": "FILTERG"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ComFilterGroup/Upsert"
                        }
                    }
                },
                "ComFilterList": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ComFilterList/FindAll",
                            "FilterID": "FILTERL"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ComFilterList/Upsert"
                        }
                    }
                },
                "ProcessMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "Url": "ProcessMaster/FindAll",
                            "FilterID": "DYN_PRO"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "Url": "ProcessMaster/Upsert",
                        }
                    }
                },
                "EventMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "Url": "EventMaster/FindAll",
                            "FilterID": "EVEMA"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "Url": "EventMaster/Upsert",
                        }
                    }
                },
                "EventGroup": {
                    "RowIndex": -1,
                    "API": {
                        "FindLookup": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntry/Dynamic/FindLookup",
                            "FilterID": "EVEGRP",
                            "DBObjectName": "EventGroup"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EventGroup/FindAll",
                            "FilterID": "EVEGR"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EventGroup/Upsert"
                        }
                    }
                },
                "EventGroupMapping": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EventGroupMapping/FindAll",
                            "FilterID": "EVGRMA"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EventGroupMapping/Upsert"
                        }
                    }
                },
                "OrgEventGroup": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgEventGroup/FindAll",
                            "FilterID": "OREVGR"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgEventGroup/Upsert"
                        }
                    }
                },
                "OrgEventEmailContacts": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgEventEmailContacts/FindAll",
                            "FilterID": "OREEMC"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgEventEmailContacts/Upsert"
                        }
                    }
                },
                "OrgEventTask": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgEventTask/FindAll",
                            "FilterID": "ORGEVTA"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgEventTask/Upsert"
                        }
                    }
                },
                "DataEntryProcessTaskMapping": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "DataEntryProcessTaskMapping/FindAll",
                            "FilterID": "DYN_PRS"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "DataEntryProcessTaskMapping/Upsert"
                        }
                    }
                },
                "TypeMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TypeMaster/FindAll",
                            "FilterID": "DYN_TYP"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TypeMaster/GetColumnValuesWithFilters",
                            "FilterID": "DYN_TYP"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TypeMaster/Upsert"
                        }
                    }
                },
                "EntityMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "Url": "EntityMaster/FindAll",
                            "FilterID": "DYN_ENT"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "Url": "EntityMaster/Upsert"
                        }
                    }
                },
                "DataEntryDetails": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "Url": "DataEntryDetails/GetById/"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "Url": "DataEntryDetails/Upsert"
                        }
                    }
                },
                "TeamProjectMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TeamProjectMaster/FindAll",
                            "FilterID": "TEAM_PR"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TeamProjectMaster/Upsert"
                        }
                    }
                },
                "FieldMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "FieldMaster/FindAll",
                            "FilterID": "DYN_FIE"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "FieldMaster/Upsert",
                            "FilterID": ""
                        }
                    }
                },
                "SecRole": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecRole/FindAll",
                            "FilterID": "SECROLE"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecRole/Upsert"
                        }
                    }
                },
                "SecRoleOperation": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecRoleOperation/FindAll",
                            "FilterID": "SECROLE"
                        }
                    }
                },
                "AppSettings": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "AppSettings/FindAll/",
                            "FilterID": "APPSETT"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "AppSettings/Upsert/"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "AppSettings/GetColumnValuesWithFilters/",
                            "FilterID": "APPSETT"
                        },
                        "StaredFindAll": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "AppSettings/StaredFindAll/DASHBOARD/"
                        },
                        "NewGuidId": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "AppSettings/NewGuidId"
                        }
                    }
                },
                "UserSettings": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "UserSettings/FindAll/",
                            "FilterID": "USRSETT"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "UserSettings/Upsert/"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "UserSettings/GetColumnValuesWithFilters/",
                            "FilterID": "USRSETT"
                        }
                    }
                },
                "TenantUserSettings": {
                    "RowIndex": -1,
                    "API": {
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TenantUserSettings/Upsert",
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TenantUserSettings/FindAll",
                            "FilterID": "TENUSST"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TenantUserSettings/Insert",
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TenantUserSettings/Update",
                        }
                    }
                },
                "Country": {
                    "RowIndex": -1,
                    "API": {
                        "FindLookup": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntry/Dynamic/FindLookup",
                            "FilterID": "MSTCOUN",
                            "DBObjectName": "MstCountry"
                        }
                    }
                },
                "MstCountry": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "MstCountry/FindAll",
                            "FilterID": "MSTCOUN"
                        }
                    }
                },
                "MstContainer": {
                    "RowIndex": -1,
                    "API": {
                        "FindLookup": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntry/Dynamic/FindLookup",
                            "FilterID": "MSTCONT",
                            "DBObjectName": "MstContainer"
                        }
                    }
                },
                "CountryState": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CountryState/FindAll",
                            "FilterID": "MSTCSTE"
                        }
                    }
                },
                "Currency": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MstCurrency/FindAll",
                            "FilterID": "MSTCURR"
                        }
                    }
                },
                "ServiceLevel": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MstServiceLevel/FindAll",
                            "FilterID": "MSTPACK"
                        }
                    }
                },
                "CfxMenus": {
                    "RowIndex": -1,
                    "API": {
                        "FindAllMenuWise": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CfxMenus/FindAllMenuWise",
                            "FilterID": "CFXMENU"
                        },
                        "MasterFindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CfxMenus/MasterFindAll",
                            "FilterID": "CFXMENU"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CfxMenus/FindAll",
                            "FilterID": "CFXMENU"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CfxMenus/Upsert"
                        },
                        "MasterCascadeFindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CfxMenus/MasterCascadeFindAll",
                            "FilterID": "CFXMENU"
                        }
                    }
                },
                "MenuGroups": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MenuGroups/FindAll",
                            "FilterID": "MENUGRO"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MenuGroups/Upsert"
                        }
                    }
                },
                "CfxTypes": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "cfxtypes/FindAll/",
                            "FilterID": "CFXTYPE"
                        },
                        "DynamicFindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "cfxtypes/DynamicFindAll/",
                            "FilterID": "CFXTYPE"
                        },
                        "GetColumnValues": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "cfxtypes/GetColumnValues/"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "cfxtypes/GetColumnValuesWithFilters/",
                            "FilterID": "CFXTYPE"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "cfxtypes/Upsert/"
                        },
                        "FindAllWithParent": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "cfxtypes/FindAllWithParent/",
                            "FilterID": "CFXTYPE"
                        }
                    }
                },
                "DataEntry": {
                    "RowIndex": -1,
                    "API": {
                        "FindConfig": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntry/Dynamic/FindConfig",
                            "FilterID": "DYNDAT"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntry/Dynamic/FindAll",
                            "FilterID": "DYNDAT"
                        },
                        "SaveAndComplete": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntry/SaveAndComplete"
                        }
                    }
                },
                "DataEntryMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntryMaster/FindAll",
                            "FilterID": "DYNDAT"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntryMaster/GetColumnValuesWithFilters",
                            "FilterID": "DYNDAT"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DataEntryMaster/Upsert"
                        }
                    }
                },
                "MstPackType": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MstPackType/FindAll",
                            "FilterID": "MSTPACK"
                        }
                    }
                },
                "DocTypeMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DocTypeMaster/FindAll",
                            "FilterID": "MSTDOCT"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "Url": "DocTypeMaster/Upsert",
                        }
                    }
                },
                "SecSession": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SecSessionActivity/FindAll",
                            "FilterID": "SECSESS"
                        }
                    }
                },
                "OrgHeader": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "OrgHeader/GetById/"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgHeader/FindAll",
                            "FilterID": "ORGHEAD"
                        },
                        "MasterFindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgHeader/MasterFindAll",
                            "FilterID": "ORGHEAD"
                        }
                    },
                },
                "OrgAddress": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgAddress/FindAll",
                            "FilterID": "ORGADDR"
                        },
                        "DynamicFindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgAddress/DynamicFindAll",
                            "FilterID": "ORGADDR"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "OrgAddress/Delete/"
                        },
                        "CountryState": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CountryState/FindAll",
                            "FilterID": "MSTCSTE"
                        },
                        "UNLOCO": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MstUnloco/FindAll",
                            "FilterID": "MSTUNL"
                        },
                    },
                },
                "OrgContact": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgContact/FindAll",
                            "FilterID": "ORGCONT"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "OrgContact/Delete/"
                        }
                    }
                },
                "WmsClientParameterByWarehouse": {
                    "RowIndex": -1,
                    "API": {
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "WmsClientParameterByWarehouse/Delete/"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "WmsClientParameterByWarehouse/Insert/"
                        },
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "T",
                            "Url": "WmsClientParameterByWarehouse/GetById/"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "WmsClientParameterByWarehouse/FindAll",
                            "FilterID": "WMSWCP"
                        }
                    }
                },
                "WmsClientPickPackParamsByWms": {
                    "RowIndex": -1,
                    "API": {
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "WmsClientPickPackParamsByWms/Delete/"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "T",
                            "Url": "WmsClientPickPackParamsByWms/Insert/"
                        },
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "T",
                            "Url": "WmsClientPickPackParamsByWms/GetById/"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "WmsClientPickPackParamsByWms/FindAll",
                            "FilterID": "WMSWPP"
                        }
                    }
                },
                "JobAddress": {
                    "RowIndex": -1,
                    "API": {
                        "DynamicFindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobAddress/DynamicFindAll",
                            "FilterID": "JOBADDR"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobAddress/FindAll",
                            "FilterID": "JOBADDR"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobAddress/Insert",

                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobAddress/Update",

                        }
                    }
                },
                "JobRoutes": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRoutes/FindAll",
                            "FilterID": "JOBROUT"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRoutes/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRoutes/Update"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRoutes/Delete/"
                        },
                        "UpdateList": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRoutes/UpdateList",
                            "FilterID": "JOBROUT"
                        },
                        "UpdateRecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRoutes/UpdateRecords",
                            "FilterID": "JOBROUT"
                        },
                        "DeleteSailing": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRoutes/DeleteSailing",
                            "FilterID": "JOBROUT"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRoutes/Upsert",
                            "FilterID": "JOBROUT"
                        },
                    },
                    "Grid": {
                        "ColumnDef": [{
                            "field": "LegOrder",
                            "displayName": "LegOrder",
                        }, {
                            "field": "TransportMode",
                            "displayName": "Mode",
                        }, {
                            "field": "TransportType",
                            "displayName": "Type",
                        }, {
                            "field": "Status",
                            "displayName": "Status",
                        }, {
                            "field": "Vessel",
                            "displayName": "Vessel",
                        }, {
                            "field": "VoyageFlight",
                            "displayName": "Voyage/ Flight",
                        }, {
                            "field": "LoadPort",
                            "displayName": "Load",
                        }, {
                            "field": "DischargePort",
                            "displayName": "Discharge",
                        }, {
                            "field": "IsDomestic",
                            "displayName": "Is Domestic",
                        }, {
                            "field": "ETD",
                            "displayName": "ETD",
                            "cellTemplate": "<div class='padding-5 text-single-line'>{{row.entity.ETD | date:'dd-MMM-yyyy  hh:mm a'}}</div>",
                            "isDateField": true
                        }, {
                            "field": "ETA",
                            "displayName": "ETA",
                            "cellTemplate": "<div class='padding-5 text-single-line'>{{row.entity.ETA | date:'dd-MMM-yyyy  hh:mm a'}}</div>",
                            "isDateField": true
                        }, {
                            "field": "ATD",
                            "displayName": "ATD",
                            "cellTemplate": "<div class='padding-5 text-single-line'>{{row.entity.ATD | date:'dd-MMM-yyyy  hh:mm a'}}</div>",
                            "isDateField": true
                        }, {
                            "field": "ATA",
                            "displayName": "ATA",
                            "cellTemplate": "<div class='padding-5 text-single-line'>{{row.entity.ATA | date:'dd-MMM-yyyy  hh:mm a'}}</div>",
                            "isDateField": true
                        }],
                        "GridConfig": {
                            "isHeader": false,
                            "isSearch": false,
                            "title": "User Details",
                            "isSorting": false,
                            "isColumnHeader": true,
                            "isEdit": true,
                            "isDelete": true,
                            "isPagination": false,
                            "itemsPerPage": 10,
                            "isRowTemplate": false,
                            "rowTemplate": ""
                        }
                    }
                },
                "JobComments": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobComments/FindAll",
                            "FilterID": "JOBCMTS"
                        },
                        "FindAllWithAccess": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobComments/FindAllWithAccess",
                            "FilterID": "JOBCMTS"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobComments/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobComments/Update"
                        }
                    }
                },
                "JobExceptions": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobException/FindAll",
                            "FilterID": "JOBEXCP"
                        },
                        "FindAllWithAccess": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobException/FindAllWithAccess",
                            "FilterID": "JOBEXCP"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobException/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobException/Update"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobException/Upsert"
                        },
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobException/GetById/"
                        }
                    }
                },
                "MstExceptionType": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MstExceptionType/FindAll",
                            "FilterID": "MSTEXCE"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "Url": "MstExceptionType/Upsert",
                        }
                    }
                },
                "MstCommentType": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MstCommentType/FindAll",
                            "FilterID": "MSTCMDT"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "Url": "MstCommentType/Upsert",
                        }
                    }
                },
                "MstEmailType": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "MstEmailType/FindAll",
                            "FilterID": "MSTMAIL"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "Url": "MstEmailType/Upsert"
                        }
                    }
                },
                "JobDocument": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobDocument/FindAll/",
                            "FilterID": "JOBDOC"
                        },
                        "GetAppLogoFile": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobDocument/GetAppLogoFile/"
                        },
                        "GetTenantLogoFile": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobDocument/GetTenantLogoFile/"
                        },
                        "GetUserLogoFile": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobDocument/GetUserLogoFile/"
                        },
                        "JobDocumentDownload": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobDocument/DownloadFile/"
                        },
                        "DocumentTypeAccess": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobDocument/DocumentTypeAccess"
                        },
                        "TrustInsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobDocument/TrustInsert"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobDocument/Upsert/"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobDocument/Delete/"
                        },
                        "AmendDocument": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobDocument/AmendDocument/",
                            "FilterID": "JOBDOC"
                        },
                        "DownloadExcelFile": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobDocument/DownloadExcelFile/"
                        },
                        "Grid": {
                            "ColumnDef": [{
                                "field": "FileName",
                                "displayName": "File Name"
                            }, {
                                "field": "Download",
                                "displayName": "Download",
                                "width": 80,
                                "cellTemplate": "<div  class='p-5 text-single-line text-center'><span class='fa fa-download cursor-pointer' data-ng-click='DynamicTableCtrl.ePage.Masters.SelectedGridRow(x, $parent.$parent.$index, \"download\")'></span></div>"
                            }],
                            "GridConfig": {
                                "isHeader": false,
                                "isSearch": false,
                                "title": "Document",
                                "isSorting": false,
                                "isColumnHeader": true,
                                "isEdit": true,
                                "isDelete": true,
                                "isPagination": false,
                                "itemsPerPage": 25,
                                "isRowTemplate": false
                            }
                        }
                    },
                },
                "DataConfig": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "HttpType": "POST",
                            "Url": "DataConfig/FindAll",
                            "FilterID": 'DATACOF'
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "HttpType": "POST",
                            "Url": "DataConfig/Upsert"
                        }
                    }
                },
                "DataConfigFields": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "HttpType": "POST",
                            "Url": "DataConfigFields/FindAll",
                            "FilterID": 'DACONF'
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "HttpType": "POST",
                            "Url": "DataConfigFields/Upsert"
                        }
                    }
                },
                "DataAudit": {
                    "RowIndex": -1,
                    "API": {
                        "DynamicFindAll": {
                            "IsAPI": true,
                            "Url": "DataAudit/DynamicFindAll",
                            "FilterID": "DATAAUD"
                        },
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "DataAudit/FindAll",
                            "FilterID": "DATAAUD"
                        }
                    }
                },
                "DataFullTextSearch": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "DataFullTextSearch/FindAll",
                            "FilterID": "DATAFUT"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "DataFullTextSearch/Upsert"
                        }
                    }
                },
                "DataSharedEntity": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "DataSharedEntity/FindAll",
                            "FilterID": "JOBSHEN"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "DataSharedEntity/Upsert"
                        }
                    }
                },
                "JobRequiredDocument": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobRequiredDocument/FindAll",
                            "FilterID": "JOBREQU"
                        }
                    }
                },
                "DMS": {
                    "RowIndex": -1,
                    "API": {
                        "DMSDownload": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "DMS/DownloadFile"
                        },
                        "DMSUpload": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "DMS/Upload"
                        },
                        "DeleteFile": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "DMS/DeleteFile/"
                        },
                        "UploadExcel": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "DMS/UploadExcel"
                        },
                        "DownloadTemplate": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "DMS/DownloadTemplate/"
                        },
                        "DownloadExeclAsPDFFile": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "DMS/DownloadExeclAsPDFFile/"
                        }
                    }
                },
                "ConShpMapping": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ConShpMapping/FindAll",
                            "FilterID": "CONSHPMAP"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ConShpMapping/Insert"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "ConShpMapping/Delete/"
                        }
                    }
                },
                "ConConsolHeader": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ConConsolHeader/FindAll",
                            "FilterID": "CONSHEAD"
                        }
                    }
                },
                "ConsolList": {
                    "RowIndex": -1,
                    "API": {
                        "GetByID": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "ConsolList/GetById/"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ConsolList/Update"
                        }
                    }
                },
                "Communication": {
                    "RowIndex": -1,
                    "API": {
                        "CreateGroupEmail": {
                            "IsAPI": true,
                            "Url": "Communication/CreateGroupEmail/"
                        },
                        "GenerateReport": {
                            "IsAPI": true,
                            "Url": "Communication/GenerateReport/"
                        }
                    }
                },
                "JobService": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobService/FindAll",
                            "FilterID": "JOBSERV"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobService/Upsert"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "Get",
                            "Url": "JobService/Delete"
                        }
                    }
                },
                "JobEntryNum": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobEntryNum/FindAll",
                            "FilterID": "JENTNUM"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobEntryNum/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobEntryNum/Update"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobEntryNum/Delete/"
                        }
                    }
                },
                "JobHeader": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobHeader/FindAll",
                            "FilterID": "JOBHEAD"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobHeader/Insert",
                            "FilterID": "JOBHEAD"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobHeader/Update",
                            "FilterID": "JOBHEAD"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobHeader/Delete/",
                            "FilterID": "JOBHEAD"
                        }
                    },
                    "Grid": {
                        "ColumnDef": [{
                            "field": "CompanyName",
                            "displayName": "Company Name",
                        }, {
                            "field": "BranchName",
                            "displayName": "Branch Name",
                        }, {
                            "field": "DeptName",
                            "displayName": "Department Name",
                        }, {
                            "field": "Status",
                            "displayName": "Status",
                        }],
                        "GridConfig": {
                            "isHeader": false,
                            "isSearch": false,
                            "title": "User Details",
                            "isSorting": false,
                            "isColumnHeader": true,
                            "isEdit": true,
                            "isDelete": true,
                            "isPagination": false,
                            "itemsPerPage": 10,
                            "isRowTemplate": false,
                            "rowTemplate": ""
                        }
                    }
                },
                "PorOrderHeader": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderHeader/FindAll",
                            "FilterID": "ORDHEAD"
                        },
                        "GetSplitOrdersByOrderNo": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "PorOrderHeader/GetSplitOrdersByOrderNo/"
                        },
                        "SplitOrderByOrderPk": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "PorOrderHeader/SplitOrderByOrderPk/",
                            "FilterID": "ORDHEAD"
                        },
                        "UpdateRecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderHeader/UpdateRecords"
                        },
                        "CheckOrderNumber": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "PorOrderHeader/CheckOrderNumber/",
                            "FilterID": "ORDHEAD"
                        }
                    }
                },
                "ShipmentHeader": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ShipmentHeader/FindAll",
                            "FilterID": "SHIPHEAD"
                        },
                        "Count": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ShipmentHeader/FindCount",
                            "FilterID": "SHIPHEAD"
                        },
                        "UpdateRecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "SHIPHEAD",
                            "Url": "ShipmentHeader/UpdateRecords"
                        },
                        "CloseVesselPlanningandCToB": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "ShipmentHeader/CloseVesselPlanningandCToB/"
                        },
                        "InitiateUploadSLI": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ShipmentHeader/InitiateUploadSLI",
                            "FilterID": "SHIPHEAD"
                        }
                    }
                },
                "ShipmentList": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "ShipmentList/GetById/"
                        },
                        "ShipmentActivityClose": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "ShipmentList/ShipmentActivityClose/"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ShipmentList/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ShipmentList/Update"
                        },
                        "OrderCopy": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "ShipmentList/OrderCopy/",
                            "FilterID": "ORDHEAD"
                        },
                    }
                },
                "JobPackLines": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobPackLines/FindAll",
                            "FilterID": "JOBPACK"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobPackLines/Upsert"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobPackLines/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobPackLines/Update"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "JobPackLines/Delete/"
                        }
                    }
                },
                "CmpDepartment": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CmpDepartment/FindAll",
                            "FilterID": "CMPDEPT",
                            "DBObjectName": "CmpDepartment"
                        }
                    }
                },
                "CmpCompany": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CmpCompany/FindAll",
                            "FilterID": "CMPCOMP",
                            "DBObjectName": "CmpCompany"
                        }
                    }
                },
                "CmpBranch": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CmpBranch/FindAll",
                            "FilterID": "CMPBRAN",
                            "DBObjectName": "CmpBranch"
                        }
                    }
                },
                "WmsWarehouse": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "WmsWarehouse/FindAll",
                            "FilterID": "WMSWARH"
                        }
                    }
                },
                "InwardList": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "WmsInwardList/GetById/",
                        },
                        "UpdateInwardProcess": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "WmsInwardList/ProcessUpdate"
                        },
                    }
                },
                "TmsManifestList": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "TmsManifestList/GetById/",
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TmsManifestList/Update"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TmsManifest/FindAll",
                            "FilterID": "TMSMAN",
                        }
                    }
                },
                "MstDebtorGroup": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MstDebtorGroup/FindAll",
                            "FilterID": "MSTDEGP",
                        }
                    }
                },
                "MstCreditorGroup": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MstCreditorGroup/FindAll",
                            "FilterID": "MSTCEGP",
                        }
                    }
                },
                "OrgCompanyData": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgCompanyData/FindAll",
                            "FilterID": "ORGCDTA"
                        },
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "OrgCompanyData/GetById/"
                        }
                    }
                },
                "Organization": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "Org/FindAll",
                            "FilterID": ""
                        },
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "Org/GetById/"
                        }
                    }
                },
                "OrgEmployeeAssignments": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgEmployeeAssignments/FindAll",
                            "FilterID": "ORGSASS"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgEmployeeAssignments/GetColumnValuesWithFilters",
                            "FilterID": "ORGSASS"
                        }
                    }
                },
                "OrgRelatedPartiesMapping": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgRelatedPartiesMapping/FindAll",
                            "FilterID": "RELPARTY"
                        }
                    }
                },
                "SaveSettings": {
                    "RowIndex": -1,
                    "API": {
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SaveSettings/Upsert/"
                        },
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "SaveSettings/FindAll/",
                            "FilterID": "SAVESET"
                        }
                    }
                },
                "DataEvent": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "DataEvent/FindAll",
                            "FilterID": "DATAEVT"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "DataEvent/Upsert",
                            "FilterID": ""
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": true,
                            "HttpType": "POST",
                            "Url": "DataEvent/GetColumnValuesWithFilters",
                            "FilterID": "DATAEVT"
                        },
                        "EventTypeAccess": {
                            "IsAPI": true,
                            "Url": "DataEvent/EventTypeAccess",
                            "FilterID": "DATAEVT"
                        }
                    }
                },
                "OrgPartyType": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "OrgPartyType/FindAll",
                            "FilterID": "ORGPTY"
                        }
                    }
                },
                "JobEmail": {
                    "RowIndex": -1,
                    "API": {
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobEmail/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "JobEmail/Update"
                        },
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "JobEmail/FindAll",
                            "FilterID": "JOBEML"
                        },
                        "FindAllWithAccess": {
                            "IsAPI": true,
                            "Url": "JobEmail/FindAllWithAccess",
                            "FilterID": "JOBEML"
                        }
                    }
                },
                "NotificationEmail": {
                    "RowIndex": -1,
                    "API": {
                        "Send": {
                            "IsAPI": true,
                            "Url": "Notification/Email/Send",

                        },

                    }
                },
                "JobException": {
                    "Grid": {
                        "ColumnDef": [{
                            "field": "Title",
                            "displayName": "Title"
                        }, {
                            "field": "Description",
                            "displayName": "Description"
                        }, {
                            "field": "Reply",
                            "displayName": "Reply",
                            "width": 60,
                            "cellTemplate": "<i class='fa fa-reply' ng-click= 'DynamicTableCtrl.ePage.Masters.SelectedGridRow(x, $parent.$parent.$index, \"link\")'></i>",
                        }],
                        "GridConfig": {
                            "isHeader": false,
                            "isSearch": false,
                            "title": "JobException List",
                            "isSorting": false,
                            "isColumnHeader": true,
                            "isEdit": false,
                            "isDelete": true,
                            "isPagination": false,
                            "itemsPerPage": 10,
                            "isRowTemplate": false,
                            "rowTemplate": `<div data-ng-repeat='y in DynamicTableCtrl.ePage.Masters.GridConfig.columnDef' class='padding-5 clearfix'>
                            <div class='col-sm-1'>{{x.Id}}</div>
                            <div class='col-sm-2'>{{x.FName}}</div>
                            <div class='col-sm-2'>{{x.LName}}</div>
                            </div>`
                        }
                    }
                },
                "TeamTargetRelease": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "TeamTargetRelease/FindAll",
                            "FilterID": "TEAMTRL"
                        },
                        "Insert": {
                            "IsAPI": true,
                            "Url": "TeamTargetRelease/Insert",
                            "FilterID": ""
                        },
                        "Update": {
                            "IsAPI": true,
                            "Url": "TeamTargetRelease/Update",
                            "FilterID": ""
                        }
                    }
                },
                "TeamTaskTagging": {
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "TeamTaskTagging/FindAll",
                            "FilterID": "TEAMTAG"
                        },
                        "Insert": {
                            "IsAPI": true,
                            "Url": "TeamTaskTagging/Insert"
                        },
                        "Delete": {
                            "IsAPI": true,
                            "Url": "TeamTaskTagging/Delete/"
                        }
                    }
                },
                "TeamChat": {
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "TeamChat/FindAll",
                            "FilterID": "TEAMCHAT"
                        },
                        "Insert": {
                            "IsAPI": true,
                            "Url": "TeamChat/Insert",
                            "FilterID": "TEAMCHAT"
                        }
                    }
                },
                "TeamEffort": {
                    "API": {
                        "Insert": {
                            "IsAPI": true,
                            "Url": "TeamEffort/Insert",
                            "FilterID": ""
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "TeamEffort/Upsert",
                            "FilterID": ""
                        },
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "TeamEffort/FindAll",
                            "FilterID": "TEAMEFT"
                        },
                    }
                },
                "TeamTask": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "TeamTask/FindAll",
                            "FilterID": "TEAMTSK"
                        },
                        "Insert": {
                            "IsAPI": true,
                            "Url": "TeamTask/Insert",
                            "FilterID": ""
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "TeamTask/Upsert",
                            "FilterID": ""
                        },
                        "GetColumnValues": {
                            "IsAPI": true,
                            "Url": "TeamTask/GetColumnValues/TSK_Remarks",
                            "FilterID": "TEAMTSK"
                        }
                    }
                },
                "EBPMProcessMaster": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMProcessMaster/FindAll",
                            "FilterID": "BPMPSM"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "EBPMProcessMaster/Upsert"
                        },
                        "ProcessTypeAccess": {
                            "IsAPI": true,
                            "Url": "EBPMProcessMaster/ProcessTypeAccess"
                        }
                    }
                },
                "EBPMProcessScenario": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMProcessScenario/FindAll",
                            "FilterID": "BPMPSS"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "EBPMProcessScenario/Upsert"
                        }
                    }
                },
                "EBPMControlTower": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMControlTower/FindAll",
                            "FilterID": "BPMWKI"
                        }
                    }
                },
                "vwWorkItemControlTowerMoreInfo": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "vwWorkItemControlTowerMoreInfo/FindAll",
                            "FilterID": "WICTMI"
                        }
                    }
                },
                "TableColumn": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "TableColumn/FindAll",
                            "FilterID": "TABLECOL"
                        }
                    }
                },
                "Table": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "Table/FindAll",
                            "FilterID": "TABLENAM"
                        }
                    }
                },
                "EBPMWorkStepInfo": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepInfo/FindAll",
                            "FilterID": "BPMWSI"
                        },
                        "DynamicFindAll": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepInfo/DynamicFindAll",
                            "FilterID": "BPMWSI"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepInfo/Upsert"
                        }
                    }
                },
                "EBPMWorkStepAccess": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepAccess/FindAll",
                            "FilterID": "BPMWSA"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepAccess/Upsert"
                        }
                    }
                },
                "EBPMWorkStepRules": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepRules/FindAll",
                            "FilterID": "BPMWSR"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepRules/Upsert"
                        }
                    }
                },
                "EBPMWorkStepActions": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepActions/FindAll",
                            "FilterID": "BPMSTA"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "EBPMWorkStepActions/Upsert"
                        }
                    }
                },
                "EBPMWorkItem": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMWorkItem/FindAll",
                            "FilterID": "BPMWKI"
                        },
                        "FindAllWithEntity": {
                            "IsAPI": true,
                            "Url": "EBPMWorkItem/FindAllWithEntity",
                            "FilterID": "BPMWKI"
                        },
                        "FindAllStatusCount": {
                            "IsAPI": true,
                            "Url": "EBPMWorkItem/FindAllStatusCount",
                            "FilterID": "BPMWKI"
                        },
                        "FindAllWithEntityCount": {
                            "IsAPI": true,
                            "Url": "EBPMWorkItem/FindAllWithEntityCount",
                            "FilterID": "BPMWKI"
                        },
                        "FindAllCount": {
                            "IsAPI": true,
                            "Url": "EBPMWorkItem/FindAllCount",
                            "FilterID": "BPMWKI"
                        },
                        "FindAllWithAccess": {
                            "IsAPI": true,
                            "Url": "EBPMWorkItem/FindAllWithAccess",
                            "FilterID": "BPMWKI"
                        },
                        "FindAllWithAccessWithEntity": {
                            "IsAPI": true,
                            "Url": "EBPMWorkItem/FindAllWithAccessWithEntity",
                            "FilterID": "BPMWKI"
                        }
                    }
                },
                "EBPMWorkFlow": {
                    "RowIndex": -1,
                    "API": {
                        "GetByInstanceNo": {
                            "IsAPI": true,
                            "Url": "EBPMWorkFlow/GetByInstanceNo/"
                        }
                    }
                },
                "EBPMEngine": {
                    "RowIndex": -1,
                    "API": {
                        "InitiateProcess": {
                            "IsAPI": true,
                            "Url": "EBPMEngine/InitiateProcess",
                        },
                        "ReAssignActivity": {
                            "IsAPI": true,
                            "Url": "EBPMEngine/ReAssignActivity",
                        },
                        "StartKPI": {
                            "IsAPI": true,
                            "Url": "EBPMEngine/StartKPI",
                        },
                        "CancelKPI": {
                            "IsAPI": true,
                            "Url": "EBPMEngine/CancelKPI",
                        },
                        "MovetoCommonQue": {
                            "IsAPI": true,
                            "Url": "EBPMEngine/MovetoCommonQue",
                        },
                        "CompleteProcess": {
                            "IsAPI": true,
                            "Url": "EBPMEngine/CompleteProcess",
                        }
                    }
                },
                "EBPMProcessInstance": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "EBPMProcessInstance/FindAll",
                            "FilterID": "BPMPSI"

                        }

                    }
                },
                "Multilingual": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "Multilingual/FindAll",
                            "FilterID": "MLTILIG"
                        },
                        "DynamicFindAll": {
                            "IsAPI": true,
                            "Url": "Multilingual/DynamicFindAll",
                            "FilterID": "MLTILIG"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "Multilingual/Upsert"
                        }
                    }
                },
                "Validation": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "Validation/FindAll",
                            "FilterID": "VALIDAT"
                        },
                        "DynamicFindAll": {
                            "ISAPI": true,
                            "Url": "Validation/DynamicFindAll",
                            "FilterID": "VALIDAT"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "Validation/Upsert"
                        },
                        "ValidationByGroup": {
                            "IsAPI": true,
                            "Url": "Validation/ValidationByGroup",
                            "FilterID": "ENTIMAP"
                        }
                    }
                },
                "ValidationGroup": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": true,
                            "Url": "ValidationGroup/FindAll",
                            "FilterID": "VADATGRO"
                        },
                        "Upsert": {
                            "IsAPI": true,
                            "Url": "ValidationGroup/Upsert"
                        }
                    }
                },
                "LogErrorObject": {
                    "RowIndex": -1,
                    "API": {
                        "Insert": {
                            "IsAPI": true,
                            "Url": "LogErrorObject/Insert"
                        }
                    }
                },
                "Export": {
                    "RowIndex": -1,
                    "API": {
                        "Excel": {
                            "IsAPI": true,
                            "Url": "Export/Excel",
                            "FilterID": "TEST"
                        },
                        "GridExcel": {
                            "IsAPI": true,
                            "Url": "Export/GridExcel",
                            "FilterID": "TEST"
                        },
                        "AsHtml": {
                            "IsAPI": true,
                            "Url": "Export/AsHtml",
                            "FilterID": "TEST"
                        }
                    }
                },
                // Sailing 
                "SailingDetails": {
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SailingDetails/FindAll",
                            "FilterID": "JOBSAIL"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SailingDetails/Update"
                        },
                        "ListUpsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SailingDetails/ListUpsert"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SailingDetails/Insert"
                        },
                        "ListInsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SailingDetails/ListInsert"
                        }
                    }
                },
                // Order
                "PO": {
                    "RowIndex": -1,
                    "API": {
                        "GetOpenOrdersCount": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PO/GetOpenOrdersCount",
                            "FilterID": "ORDHEAD"
                        },
                        "GetPendingCargoReadinessCount": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PO/GetPendingCargoReadinessCount",
                            "FilterID": "ORDHEAD"
                        },
                        "GetPendingVesselPlanningCount": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PO/GetPendingVesselPlanningCount",
                            "FilterID": "ORDHEAD"
                        },
                        "GetPendingConvertToBookingCount": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PO/GetPendingConvertToBookingCount",
                            "FilterID": "ORDHEAD"
                        }
                    }
                },
                "OrderList": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "OrderList/GetById/",
                            "FilterID": "ORDHEAD"
                        },
                        "OrderCopy": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "OrderList/OrderCopy/",
                            "FilterID": "ORDHEAD"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "OrderList/Insert",
                            "FilterID": "ORDHEAD"
                        }
                    }
                },
                "CargoReadiness": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CargoReadiness/FindAll",
                            "FilterID": "SFULIST"
                        },
                        "SendFollowUp": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CargoReadiness/SendFollowUp",
                            "FilterID": "SFULIST"
                        },
                        "CreateFollowUpGroup": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CargoReadiness/CreateFollowUpGroup",
                            "FilterID": "SFULIST"
                        },
                        "GetGroupHeaderByGroupId": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "CargoReadiness/FollowUpGroup/GetGroupHeaderByGroupId/",
                            "FilterID": "SFULIST"
                        },
                        "GetOrdersByGroupId": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "CargoReadiness/FollowUpGroup/GetOrdersByGroupId/",
                            "FilterID": "SFULIST"
                        },
                        "CompleteFollowUpTask": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CargoReadiness/CompleteFollowUpTask",
                            "FilterID": "SFULIST"
                        },
                        "UpdateRecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CargoReadiness/FollowUpGroupDetail/UpdateRecords",
                            "FilterID": "SFULIST"
                        },
                        "FollowUpGroup": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CargoReadiness/FollowUpGroup/FindAll",
                            "FilterID": "ORDSPAH"
                        },
                        "GetFollowUpHistoryByOrderPK": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CargoReadiness/FollowUpGroup/GetFollowUpHistoryByOrderPK/",
                            "FilterID": "ORDSPAH"
                        }
                    }
                },
                "PreAdviceList": {
                    "API": {
                        "PreAdviceSendList": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PreAdviceList/PreAdviceSendList",
                            "FilterID": "SPALIST"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PreAdviceList/Update"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PreAdviceList/Delete"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PreAdviceList/Insert"
                        },
                        "SendPreAdvice": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PreAdviceList/SendPreAdvice"
                        }
                    }
                },
                "VesselPlanning": {
                    "API": {
                        "PreAdviceList": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "VesselPlanning/PreAdviceList",
                            "FilterID": "SPALIST"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "VesselPlanning/Update"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "VesselPlanning/Delete"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "VesselPlanning/Insert"
                        },
                        "SendPreAdvice": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "VesselPlanning/SendPreAdvice"
                        },
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "VesselPlanning/GetById/"
                        },
                        "GetOrdersByVesselPk": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "VesselPlanning/PPAGroup/GetOrdersByVesselPk/"
                        },
                        "GetPPAGroupHeaderByVesselPk": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "VesselPlanning/PPAGroup/GetPPAGroupHeaderByVesselPk/"
                        },
                        "UpdateRecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "VesselPlanning/PPAGroupDetails/UpdateRecords"
                        },
                        "CreateVesselPlanningGroup": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "VesselPlanning/CreateVesselPlanningGroup"
                        },
                        "PreAdviceMailHistory": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "SPALIST",
                            "Url": "VesselPlanning/PreAdviceMailHistory"
                        }
                    }
                },
                "PorOrderLineDelivery": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderLineDelivery/FindAll",
                            "FilterID": "ORDLDEL"
                        },
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "PorOrderLineDelivery/GetById/"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "PorOrderLineDelivery/Delete/",
                            "FilterID": "ORDLDEL"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderLineDelivery/Insert",
                            "FilterID": "ORDLDEL"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderLineDelivery/Update",
                            "FilterID": "ORDLDEL"
                        }
                    }
                },
                "PorOrderLine": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "PorOrderLine/GetById/",
                            "FilterID": "ORDLINE"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderLine/FindAll",
                            "FilterID": "ORDLINE"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderLine/Upsert",
                            "FilterID": "ORDLINE"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderLine/Update",
                            "FilterID": "ORDLINE"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderLine/Delete",
                            "FilterID": "ORDLINE"
                        },
                        "UpdateRecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderLine/UpdateRecords",
                            "FilterID": "ORDLINE"
                        }
                    }
                },
                // PO Upload
                "BatchUploadList": {
                    "RowIndex": -1,
                    "API": {
                        "CompletePOUpload": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "BatchUploadList/CompletePOUpload/",
                            "FilterID": ""
                        },
                        "InitatePOUpload": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "BatchUploadList/InitatePOUpload/",
                            "FilterID": ""
                        }
                    }
                },
                // PorOrderFollowUp
                "PorOrderFollowUp": {
                    "RowIndex": -1,
                    "API": {
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderFollowUp/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderFollowUp/Update"
                        }
                    }
                },
                // FollowUpList
                "FollowUpList": {
                    "RowIndex": -1,
                    "API": {
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "FollowUpList/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "FollowUpList/Update"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "FollowUpList/Delete"
                        },
                        "ActivateCRDUpdate": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "FollowUpList/ActivateCRDUpdate"
                        }
                    }
                },
                // Smart Track
                "PorOrderContainer": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderContainer/FindAll",
                            "FilterID": "ORDCONT"
                        }
                    }
                },
                "PkgCntMapping": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PkgCntMapping/FindAll",
                            "FilterID": "PKGCNTMA"
                        }
                    }
                },
                "CntContainer": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "CntContainer/GetById/"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CntContainer/FindAll",
                            "FilterID": "CONTHEAD"
                        },
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CntContainer/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CntContainer/Update"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "CntContainer/Delete/"
                        }
                    }
                },
                "ShipmentPreAdviceGroupHeader": {
                    "RowIndex": -1,
                    "API": {
                        "GetOrdersByGroupPK": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "ShipmentPreAdviceGroupHeader/GetOrdersByGroupPK/"
                        }
                    }
                },
                "ConvertToBookingMapping": {
                    "RowIndex": -1,
                    "API": {
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ConvertToBookingMapping/Insert",
                            "FilterID": "SPACTB"
                        }
                    }
                },
                "ShipmentPreAdvice": {
                    "RowIndex": -1,
                    "API": {
                        "GetOrdersByGroupPK": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "ShipmentPreAdvice/GetOrdersByGroupPK/"
                        }
                    }
                },
                "OrgBuyerSupplierMapping": {
                    "RowIndex": -1,
                    "API": {
                        "GetMDMDfaultFields": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "FilterID": "ORGBSMAP",
                            "Url": "OrgBuyerSupplierMapping/GetMDMDfaultFields/"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "ORGBSMAP",
                            "Url": "OrgBuyerSupplierMapping/FindAll"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "FilterID": "ORGBSMAP",
                            "Url": "OrgBuyerSupplierMapping/Delete/"
                        }
                    }
                },
                "OrgUserAcess": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "ORGUACC",
                            "Url": "OrgUserAcess/FindAll"
                        }
                    }
                },
                "Booking": {
                    "RowIndex": -1,
                    "API": {
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "Booking/Insert"
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "Booking/Update"
                        }
                    }
                },
                "CompleteVerifyBooking": {
                    "RowIndex": -1,
                    "API": {
                        "CompleteVerifyBooking": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "mhplus/shipment/CompleteVerifyBooking",
                        }
                    }
                },
                "TmsConsignmentList": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "TmsConsignmentList/GetById/",
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "TmsConsignmentList/Update"
                        }
                    }
                },
                "ApproveRejectBooking": {
                    "RowIndex": -1,
                    "API": {
                        "ApproveRejectBooking": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "mhplus/shipment/ApproveRejectBooking",
                        }
                    }
                },
                // Miscellaneous Service
                "OrgMiscServ": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "ORGMISC",
                            "Url": "OrgMiscServ/FindAll"
                        }
                    }
                },
                // Product
                "PrdProduct": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "ORGSUPP",
                            "Url": "PrdProduct/FindAll"
                        }
                    }
                },
                "PrdProductUnit": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "ORGPARTU",
                            "Url": "PrdProductUnit/FindAll"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "PrdProductUnit/Delete/"
                        },
                        "FetchQuantity": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PrdProductUnit/FetchQuantity"
                        }
                    }
                },
                "PrdProductRelatedParty": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "ORGPRL",
                            "Url": "PrdProductRelatedParty/FindAll"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "PrdProductRelatedParty/Delete/"
                        },
                    }
                },
                "PrdProductBOM": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "ORGPABOM",
                            "Url": "PrdProductBOM/FindAll"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "Get",
                            "Url": "PrdProductBOM/Delete/"
                        }
                    }
                },
                "PrdPrductBarcode": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "FilterID": "ORGSUPPB",
                            "Url": "PrdPrductBarcode/FindAll"
                        },
                        "Delete": {
                            "IsAPI": "true",
                            "HttpType": "Get",
                            "Url": "PrdPrductBarcode/Delete/"
                        }
                    }
                },
                "PorOrderBatchUpload": {
                    "RowIndex": -1,
                    "API": {
                        "UpdateRecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderBatchUpload/UpdateRecords",
                            "FilterID": "ORDBATCH"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "PorOrderBatchUpload/FindAll",
                            "FilterID": "ORDBATCH"
                        }
                    }
                },
                "ShpExtended": {
                    "RowIndex": -1,
                    "API": {
                        "UpdateRecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ShpExtended/UpdateRecords",
                            "FilterId": ""
                        }
                    }
                },
                "EntitiesMapping": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EntitiesMapping/FindAll",
                            "FilterID": "ENTIMAP"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EntitiesMapping/Upsert"
                        }
                    }
                },
                "EntitiesMappingDetail": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EntitiesMappingDetail/FindAll",
                            "FilterID": "ENMAPDE"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EntitiesMappingDetail/Upsert"
                        }
                    }
                },
                "DYN_RelatedLookup": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DYN_RelatedLookup/FindAll",
                            "FilterID": "DYNREL"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DYN_RelatedLookup/Upsert"
                        },
                        "GetColumnValuesWithFilters": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DYN_RelatedLookup/GetColumnValuesWithFilters",
                            "FilterID": "DYNREL"
                        },
                        "GroupFindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "DYN_RelatedLookup/GroupFindAll",
                            "FilterID": "DYNREL"
                        }
                    }
                },
                "MasterDYNDataentrymaster": {
                    "RowIndex": -1,
                    "API": {
                        "GetById": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "MasterDYNDataentrymaster/GetById/"
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "MasterDYNDataentrymaster/FindAll",
                            "FilterID": "MADYNDAT"
                        }
                    }
                },
                "EPRExpression": {
                    "RowIndex": -1,
                    "API": {
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EPRExpression/FindAll",
                            "FilterID": "EPREXPR"
                        },
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EPRExpression/Upsert"
                        }
                    }
                },
                "OrgConsigneeConsignorRelationship": {
                    "RowIndex": -1,
                    "API": {
                        "Insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgConsigneeConsignorRelationship/Insert",
                        },
                        "Update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "OrgConsigneeConsignorRelationship/Update",
                        }
                    }
                },
                "SOPTypelist": {
                    "RowIndex": -1,
                    "API": {
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SOPTypelist/Upsert",
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "SOPTypelist/FindAll",
                        }
                    }
                },
                "ModuleSettings": {
                    "RowIndex": -1,
                    "API": {
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ModuleSettings/Upsert",
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "ModuleSettings/FindAll",
                        }
                    }
                },
                "EBPMEntitiesMapping": {
                    "RowIndex": -1,
                    "API": {
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EBPMEntitiesMapping/Upsert",
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EBPMEntitiesMapping/FindAll",
                            "FilterID": "BPMENM"
                        }
                    }
                },
                "EBPMCFXTypes": {
                    "RowIndex": -1,
                    "API": {
                        "Upsert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EBPMCFXTypes/Upsert",
                        },
                        "FindAll": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "EBPMCFXTypes/FindAll",
                            "FilterID": "BPMCFT"
                        },
                        "ActivityFindAll": {
                            "IsAPI": true,
                            "Url": "EBPMCFXTypes/ActivityFindAll",
                            "FilterID": "BPMCFT"
                        }
                    }
                },
                "BuyerOrder": {
                    "API": {
                        "findall": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/buyer/findall",
                            "FilterID": "ORDHEAD"
                        },
                        "1_1_listgetbyid": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/buyer/listgetbyid/"
                        },
                        "3_1_listgetbyid": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/forwarderbuyer/listgetbyid/"
                        },
                        "activityclose": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/buyer/activityclose/"
                        },
                        "ordercopy": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/buyer/ordercopy/"
                        },
                        "split": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/buyer/split/"
                        },
                        "insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "order/buyer/insert"
                        },
                        "update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "order/buyer/update"
                        }
                    }
                },
                "BuyerOrderBatchUpload": {
                    "API": {
                        "findall": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "orderbatchupload/buyer/findall",
                            "FilterID": "ORDBATCH"
                        },
                        "getbyid": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "orderbatchupload/buyer/getbyid/"
                        },
                        "activityclose": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "orderbatchupload/buyer/activityclose/"
                        },
                        "insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "orderbatchupload/buyer/insert"
                        },
                        "updaterecords": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "orderbatchupload/buyer/updaterecords"
                        }
                    }
                },
                "ForwarderOrder": {
                    "API": {
                        "findall": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/forwarder/findall",
                            "FilterID": "ORDHEAD"
                        },
                        "3_3_listgetbyid": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/forwarder/listgetbyid/"
                        },
                        "1_3_listgetbyid": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/buyerforwarder/listgetbyid/"
                        },
                        "activityclose": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/forwarder/activityclose/"
                        },
                        "ordercopy": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/forwarder/ordercopy/"
                        },
                        "split": {
                            "IsAPI": "true",
                            "HttpType": "GET",
                            "Url": "order/forwarder/split/"
                        },
                        "insert": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "order/forwarder/insert"
                        },
                        "update": {
                            "IsAPI": "true",
                            "HttpType": "POST",
                            "Url": "order/forwarder/update"
                        }
                    }
                }
            }
        };

        return exports;
    }
})();