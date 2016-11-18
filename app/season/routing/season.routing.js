System.register(['@angular/router', '../components/season.component', '../../prevent-unsaved-changes-guard.service', '../../auth/services/auth-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, season_component_1, prevent_unsaved_changes_guard_service_1, auth_guard_service_1;
    var seasonRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (season_component_1_1) {
                season_component_1 = season_component_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            }],
        execute: function() {
            exports_1("seasonRouting", seasonRouting = router_1.RouterModule.forChild([
                {
                    path: 'season',
                    component: season_component_1.SeasonComponent,
                    canActivate: [auth_guard_service_1.AuthGuard]
                },
                {
                    path: 'season/:id',
                    component: season_component_1.SeasonComponent,
                    canActivate: [auth_guard_service_1.AuthGuard],
                    canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                },
                {
                    path: 'season/new',
                    component: season_component_1.SeasonComponent,
                    canActivate: [auth_guard_service_1.AuthGuard],
                    canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                }
            ]));
        }
    }
});
//# sourceMappingURL=season.routing.js.map