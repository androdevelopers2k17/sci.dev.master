(function () {
    'use strict';

    angular
        .module("Application")
        .config(Config);

    Config.$inject = ['$stateProvider', '$ocLazyLoadProvider', "SCI_CONSTANT"];

    function Config($stateProvider, $ocLazyLoadProvider, SCI_CONSTANT) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: false,
            serie: false,
            modules: SCI_CONSTANT.ocLazyLoadModules
        });

        $stateProvider
            .state('SCI', {
                abstract: true,
                url: '/SCI',
                templateUrl: 'app/sci/shared/sci.html',
                controller: "SciController as SciCtrl",
                ncyBreadcrumb: {
                    label: 'SCI_Test'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        if (pageAccessService.CheckAuthToken()) {
                            deferred.resolve();
                        }
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(["navBar", "navbarDropdownMenu", "footerBar", "sideBar", "SCI"]);
                    }]
                }
            })
            .state('SCI.dashboard', {
                url: '/dashboard',
                templateUrl: 'app/SCI/dashboard/dashboard.html',
                controller: "SCIDashboardController as SCIDashboardCtrl",
                ncyBreadcrumb: {
                    label: 'Dashboard'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        if (pageAccessService.CheckAuthToken()) {
                            deferred.resolve();
                        }
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(["SCIDashboard"]);
                    }]
                }
            })
            // MyTasks
            .state('EA.myTask', {
                url: '/my-tasks',
                templateUrl: 'app/SCI/my-task/my-task.html',
                controller: "MyTaskController as MyTaskCtrl",
                ncyBreadcrumb: {
                    label: 'My Tasks'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        if (pageAccessService.CheckAuthToken()) {
                            deferred.resolve();
                        }
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(["errorWarning", "confirmation", "dynamicLookup", "dynamicControl", "oneLevelMapping", "Summernote", "CustomFileUpload", "Comment", "CommentModal", "Document", "DocumentModal", "Email", "EmailModal", "EmailDirective", "Exception", "ExceptionModal", "DelayReason", "DelayReasonModal", "Checklist", "ChecklistModal", "UploadDocument", "AddComment", "ViewDocument", "ViewComment", "TaskAssignStartComplete", "MyTaskDynamicDirective", "MyTaskDefaultDirective", "MyTaskDefaultEditDirective", "MyTaskDirective", "MyTask", "MyTaskConfig"]);
                        // return $ocLazyLoad.load(["chromeTab", "confirmation", "compareDate", "dynamicListModal", "dynamicList", "dynamicLookup", "dynamicControl", "dynamicGrid", "oneLevelMapping", "Summernote", "CustomFileUpload", "errorWarning", "Comment", "addressDirective", "addressWrapper", "addressModal", "CommentModal", "Document", "DocumentModal", "Email", "EmailModal", "Exception", "ExceptionModal", "EmailDirective", "DelayReason", "DelayReasonModal", "Checklist", "ChecklistModal", "UploadDocument", "AddComment", "ViewDocument", "ViewComment", "ActivityTemplate1", "ActivityTemplateConsol1", "ActivityFormTemplate1", "DynamicTabLeft", "MyTaskDynamicDirective", "MyTaskDefaultDirective", "MyTaskDefaultEditDirective", "MyTask", "MyTaskDirective", "WorkItemListView", "ProcessInstanceWorkItemDetails", "TaskAssignStartComplete", "inwardAsnLines", "inward", "EAwarehouse", "manifest", "manifestMenu", "manifestGeneral", "SCITransports", "manifestConsignment", "manifestItem", "manifestAddress", "manifestReadOnly", "receiveItems", "adminManifest", "createManifest", "SfuReadOnlyGridDirective", "SfuUpdateGridDirective", "SpaReadOnlyGridDirective", "SpaVesselModal", "ConvertToBookingReadOnlyGrid", "TaskEffortDirective", "TaskEffortEditDirective", "TaskCreateDirective", "TaskCreateEditDirective", "AsnirUpdateLineDirective", "AsnirUpdateLineEditDirective", "SupplementaryTaxInvDirective", "SupplementaryTaxInvEditDirective", "GSTInvoiceDirective", "GSTInvoiceEditDirective", "POBatchUploadedDirective", "POBatchUploadedEditDirective", "SfuMailDirective", "SfuMailEditDirective", "SfuCRDUpdateDirective", "SfuCRDUpdateEditDirective", "SpaMailDirective", "SpaMailEditDirective", "ConvertToBookingMail", "ConvertToBookingMailEditDirective", "ConvertToBookingVesselPlanning", "ExceptNotifyDirective", "ExceptNotifyEditDirective", "ExceptApprovalDirective", "ExceptApprovalEditDirective", "ExceptRejectDirective", "ExceptRejectEditDirective", "ApprovalNotifyDirective", "ApprovalNotifyEditDirective", "VerifyBookingDirective", "VerifyBookingEditDirective", "VerifyBookingVesselPlanning", "DispatchManifestDirective", "DispatchManifestEditDirective", "ReceiveItemDirective", "ReceiveItemEditDirective", "ArrivalAtDepotDirective", "ArrivalAtDepotEditDirective", "ApproveConsignmentDirective", "ApproveConsignmentEditDirective", "PickupConsignmentDirective", "PickupConsignmentEditDirective", "DeliveryConsignmentDirective", "DeliveryConsignmentEditDirective", "PickupManifestDirective", "PickupManifestEditDirective", "DeliveryManifestDirective", "DeliveryManifestEditDirective", "consignment", "adminConsignment", "createConsignment", "consignmentMenu", "consignmentGeneral", "consignConsignmentItem", "consignmentReadOnly", "QuickBookingApprovalDirective", "QuickBookingApprovalEditDirective", "QuickBookingApprovalNotifyDirective", "QuickBookingApprovalNotifyEditDirective", "QuickBookingRejectDirective", "QuickBookingRejectEditDirective", "ExceptRejectModalDirective", "SCIDistribution", "AttachManifestDirective", "AttachManifestEditDirective", "GateOutDirective", "GateOutEditDirective", "DockInDirective", "DockInEditDirective", "DockOutDirective", "DockOutEditDirective", "StartLoadDirective", "StartLoadEditDirective", "CompleteLoadDirective", "CompleteLoadEditDirective", "StartUnloadDirective", "StartUnloadEditDirective", "CompleteUnloadDirective", "CompleteUnloadEditDirective", "dmsManifestList", "initiateGatepass", "dmsManifestMenu", "dmsManifestGeneral", "dmsManifestAddress", "dmsManifestOrders", "dmsManifestItem", "approveManifest", "confirmTransportBooking", "dockinVehicle", "loadItems", "dockoutVehicle", "issueExitGatepass", "ConfirmManifestDirective", "ConfirmManifestEditDirective", "ApproveManifestDirective", "ApproveManifestEditDirective", "TransportBookingDirective", "TransportBookingEditDirective", "CompleteManifestDirective", "CompleteManifestEditDirective", "DNDUITress", "drogAndDrop", "routePlanning", "tracking", "dmsManifestList", "GatepassList", "dmsManifestMenu", "dmsManifestGeneral", "dmsManifestAddress", "dmsManifestOrders", "dmsManifestItem", "approveManifest", "confirmTransportBooking", "dockinVehicle", "loadItems", "dockoutVehicle", "issueExitGatepass", "completeManifest", "pickupDelivery", "CreateManifestView", "AttachOrdersView", "AddItemsView", "ConfirmBookingView", "initiateGatepass", "ConsolCommonFieldsDirective", "ShpGeneralFieldsDirective", "ConsolCommonDocsDirective", "ConsolDetailsDirective", "shipmentGeneral", "ShipmentEntityDetailsDirective", "VgmFilingDirective", "VgmFilingEditDirective", "SLIBookingDirective", "SLIBookingEditDirective", "PartiesDetailsDirective", "RoutingGridDirective", "ShipmentDetailsDirective", "ContainerEditableGridDirective", "PackingGridDirective", "ContainerDirectives", "consolContainerPopup", "ShipmentActivityDetailsDirective", "ConsolActivityDetailsDirective", "ShipmentHouseBillDetailsDirective", "OrdConfirmDirective", "OrdConfirmEditDirective", "ConfrimDirective", "PreAlertDirective", "PreAlertEditDirective", "VerifyPreAlertDirective", "VerifyPreAlertEditDirective", "FollowUpBondDirective", "FollowUpBondEditDirective", "IGMFilingDirective", "IGMFilingEditDirective", "BookingCancellationDirective", "BookingCancellationEditDirective", "ObtainDestuffDirective", "ObtainDestuffEditDirective", "ConsolOrganizationDetailsDirective", "ConsolShipment", "LinkedShipment", "ConfirmRailmentDirective", "ConfirmRailmentEditDirective", "LinerDeliveryDirective", "LinerDeliveryEditDirective", "ExportShipmentDetailsSeaGlb", "ExportConsolDetailsSeaGlb", "ExportContainerDetailsSeaGlb", "DynamicInformationSummaryDirective", "ICDClearanceEditDirective", "ICDClearanceDirective", "ContainerDetails", "ExportSeaShipmentCargoPickupGlbDirective", "containerEmptyReturnDirective", "containerEmptyReturnEditDirective", "ExportSeaShipmentPrepareTaxInvoiceglbDirective", "ExportSeaShipmentVerifyTaxInvoiceglbDirective", "ExportSeaShipmentWaitForLinerTaxInvoiceglbDirective", "ExportConsolDetailsGlb", "ExportShipmentDetailsGlb", "ExportRoutingDetailsGlb"]);
                    }]
                }
            })
            // Control Tower
            .state('EA.controlTower', {
                url: '/control-tower',
                templateUrl: 'app/SCI/control-tower/control-tower.html',
                controller: "ControlTowerController as ControlTowerCtrl",
                ncyBreadcrumb: {
                    label: "Control Tower"
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        if (pageAccessService.CheckAuthToken()) {
                            deferred.resolve();
                        }
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(["dynamicLookup", "compareDate", "WorkItemStatusCount", "ControlTowerTaskList", "ControlTower"]);
                        // return $ocLazyLoad.load(["confirmation", "compareDate", "dynamicListModal", "dynamicList", "dynamicLookup", "dynamicControl", "dynamicGrid", "WorkItemStatusCount", "ControlTowerTaskList", "ProcessInstanceWorkItemDetails", "TaskAssignStartComplete", "ControlTower", "MyTaskDynamicDirective", "MyTaskDefaultDirective", "MyTaskDefaultEditDirective", "inwardAsnLines", "inward", "EAwarehouse", "manifest", "manifestMenu", "manifestGeneral", "SCITransports", "manifestConsignment", "manifestItem", "manifestAddress", "manifestReadOnly", "receiveItems", "adminManifest", "createManifest", "SfuReadOnlyGridDirective", "SfuUpdateGridDirective", "SpaReadOnlyGridDirective", "SpaVesselModal", "ConvertToBookingReadOnlyGrid", "MyTaskDynamicDirective", "MyTaskDefaultDirective", "MyTaskDefaultEditDirective", "TaskEffortDirective", "TaskEffortEditDirective", "TaskCreateDirective", "TaskCreateEditDirective", "AsnirUpdateLineDirective", "AsnirUpdateLineEditDirective", "SupplementaryTaxInvDirective", "SupplementaryTaxInvEditDirective", "TaxInvoiceDirective", "TaxInvoiceEditDirective", "GSTInvoiceDirective", "GSTInvoiceEditDirective", "POBatchUploadedDirective", "POBatchUploadedEditDirective", "SfuMailDirective", "SfuMailEditDirective", "SfuCRDUpdateDirective", "SfuCRDUpdateEditDirective", "SpaMailDirective", "SpaMailEditDirective", "ConvertToBookingMail", "ConvertToBookingMailEditDirective", "ConvertToBookingVesselPlanning", "HBLDirective", "HBLEditDirective", "ExceptNotifyDirective", "ExceptNotifyEditDirective", "ExceptApprovalDirective", "ExceptApprovalEditDirective", "ExceptRejectDirective", "ExceptRejectEditDirective", "ApprovalNotifyDirective", "ApprovalNotifyEditDirective", "VerifyBookingDirective", "VerifyBookingEditDirective", "VerifyBookingVesselPlanning", "DispatchManifestDirective", "DispatchManifestEditDirective", "ReceiveItemDirective", "ReceiveItemEditDirective", "ArrivalAtDepotDirective", "ArrivalAtDepotEditDirective", "ApproveConsignmentDirective", "ApproveConsignmentEditDirective", "PickupConsignmentDirective", "PickupConsignmentEditDirective", "DeliveryConsignmentDirective", "DeliveryConsignmentEditDirective", "PickupManifestDirective", "PickupManifestEditDirective", "DeliveryManifestDirective", "DeliveryManifestEditDirective", "consignment", "adminConsignment", "createConsignment", "consignmentMenu", "consignmentGeneral", "consignConsignmentItem", "consignmentReadOnly", "QuickBookingApprovalDirective", "QuickBookingApprovalEditDirective", "QuickBookingApprovalNotifyDirective", "QuickBookingApprovalNotifyEditDirective", "QuickBookingRejectDirective", "QuickBookingRejectEditDirective", "ShippingBillDirective", "ShippingBillEditDirective", "CargoPickUpDirective", "CargoPickUpEditDirective", "ExceptRejectModalDirective", "SCIDistribution", "AttachManifestDirective", "AttachManifestEditDirective", "GateOutDirective", "GateOutEditDirective", "DockInDirective", "DockInEditDirective", "DockOutDirective", "DockOutEditDirective", "StartLoadDirective", "StartLoadEditDirective", "CompleteLoadDirective", "CompleteLoadEditDirective", "StartUnloadDirective", "StartUnloadEditDirective", "CompleteUnloadDirective", "CompleteUnloadEditDirective", "dmsManifestList", "initiateGatepass", "dmsManifestMenu", "dmsManifestGeneral", "dmsManifestAddress", "dmsManifestOrders", "dmsManifestItem", "approveManifest", "confirmTransportBooking", "dockinVehicle", "loadItems", "dockoutVehicle", "issueExitGatepass", "JobCostSheetDirective", "JobCostSheetEditDirective", "ConfirmManifestDirective", "ConfirmManifestEditDirective", "TransportBookingDirective", "TransportBookingEditDirective", "CompleteManifestDirective", "CompleteManifestEditDirective", "DNDUITress", "drogAndDrop", "routePlanning", "tracking", "dmsManifestList", "GatepassList", "dmsManifestMenu", "dmsManifestGeneral", "dmsManifestAddress", "dmsManifestOrders", "dmsManifestItem", "approveManifest", "confirmTransportBooking", "dockinVehicle", "loadItems", "dockoutVehicle", "issueExitGatepass", "completeManifest", "pickupDelivery", "CreateManifestView", "AttachOrdersView", "AddItemsView", "ConfirmBookingView", "initiateGatepass"]);
                    }]
                }
            })
            // Dynamic View
            .state('EA.dynamicListView', {
                url: '/dynamic-list-view/:taskName',
                templateUrl: 'app/SCI/shared/dynamic-list-view/dynamic-list-view.html',
                controller: "DynamicListViewController as DynamicListViewCtrl",
                ncyBreadcrumb: {
                    label: 'Dynamic List View'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        if (pageAccessService.CheckAuthToken()) {
                            deferred.resolve();
                        }
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(['confirmation', 'compareDate', "dynamicControl", "dynamicGrid", "dynamicListModal", "dynamicList", "dynamicLookup", 'EADynamicListView']);
                    }]
                }
            })
            .state('EA.dynamicDetailsView', {
                url: '/dynamic-details-view/:taskName',
                templateUrl: 'app/SCI/shared/dynamic-details-view/dynamic-details-view.html',
                controller: "DynamicDetailsViewController as DynamicDetailsViewCtrl",
                ncyBreadcrumb: {
                    label: 'Dynamic Details View'
                },
                resolve: {
                    CheckAccess: ["$q", "pageAccessService", function ($q, pageAccessService) {
                        var deferred = $q.defer();
                        if (pageAccessService.CheckAuthToken()) {
                            deferred.resolve();
                        }
                        return deferred.promise;
                    }],
                    LoadState: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(["dynamicControl", "dynamicGrid", "dynamicListModal", "dynamicList", "dynamicLookup", "tcGrid", 'dynamicDetailsViewDirective', 'EADynamicDetailsView']);
                    }]
                }
            })
            // Customer Portal Document
            .state('EA.allDocuments', {
                url: '/all-documents',
                templateUrl: 'app/SCI/all-documents/all-documents.html',
                controller: "AllDocumentsController as AllDocumentsCtrl",
                ncyBreadcrumb: {
                    label: 'My Documents'
                },
                resolve: {
                    CheckAccess: ["$rootScope", "$q", "$location", "$timeout", "$state", "authService", "helperService", function ($rootScope, $q, $location, $timeout, $state, authService, helperService) {
                        var deferred = $q.defer();
                        if (!authService.getUserInfo().AuthToken) {
                            $location.path("/login").search({
                                continue: $rootScope.EnteredUrl
                            });
                            // deferred.resolve();
                        } else {
                            deferred.resolve();
                        }

                        return deferred.promise;
                    }],
                    loadMyCtrl: ["$ocLazyLoad", "CheckAccess", function ($ocLazyLoad, CheckAccess) {
                        return $ocLazyLoad.load(["confirmation", "compareDate", "dynamicListModal", "dynamicList", "dynamicLookup", "dynamicControl", "dynamicGrid", "drogAndDrop", "shipment", "AllDocuments"]);
                    }]
                }
            });
    }
})();
