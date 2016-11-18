System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', '@angular/http', './components/players.component', './components/player-form.component', './services/players.service', '../prevent-unsaved-changes-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, forms_1, router_1, http_1, players_component_1, player_form_component_1, players_service_1, prevent_unsaved_changes_guard_service_1;
    var PlayersModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (players_component_1_1) {
                players_component_1 = players_component_1_1;
            },
            function (player_form_component_1_1) {
                player_form_component_1 = player_form_component_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            }],
        execute: function() {
            PlayersModule = (function () {
                function PlayersModule() {
                }
                PlayersModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            router_1.RouterModule,
                            http_1.HttpModule
                        ],
                        declarations: [
                            player_form_component_1.PlayerFormComponent,
                            players_component_1.PlayersComponent
                        ],
                        exports: [
                            player_form_component_1.PlayerFormComponent,
                            players_component_1.PlayersComponent
                        ],
                        providers: [
                            players_service_1.PlayersService,
                            prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayersModule);
                return PlayersModule;
            }());
            exports_1("PlayersModule", PlayersModule);
        }
    }
});
//# sourceMappingURL=players.module.js.map