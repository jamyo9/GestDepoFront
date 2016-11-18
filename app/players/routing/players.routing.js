System.register(['@angular/router', '../components/player-form.component', '../components/players.component', '../../prevent-unsaved-changes-guard.service', '../../auth/services/auth-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, player_form_component_1, players_component_1, prevent_unsaved_changes_guard_service_1, auth_guard_service_1;
    var playersRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (player_form_component_1_1) {
                player_form_component_1 = player_form_component_1_1;
            },
            function (players_component_1_1) {
                players_component_1 = players_component_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            }],
        execute: function() {
            exports_1("playersRouting", playersRouting = router_1.RouterModule.forChild([
                {
                    path: 'players',
                    component: players_component_1.PlayersComponent,
                    canActivate: [auth_guard_service_1.AuthGuard]
                },
                {
                    path: 'players/:id',
                    component: player_form_component_1.PlayerFormComponent,
                    canActivate: [auth_guard_service_1.AuthGuard],
                    canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                },
                {
                    path: 'players/new',
                    component: player_form_component_1.PlayerFormComponent,
                    canActivate: [auth_guard_service_1.AuthGuard],
                    canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                }
            ]));
        }
    }
});
//# sourceMappingURL=players.routing.js.map