System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', '@angular/http', './components/season.component', './components/season-form.component', './services/season.service', '../prevent-unsaved-changes-guard.service'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, router_1, http_1, season_component_1, season_form_component_1, season_service_1, prevent_unsaved_changes_guard_service_1;
    var SeasonModule;
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
            function (season_component_1_1) {
                season_component_1 = season_component_1_1;
            },
            function (season_form_component_1_1) {
                season_form_component_1 = season_form_component_1_1;
            },
            function (season_service_1_1) {
                season_service_1 = season_service_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            }],
        execute: function() {
            SeasonModule = (function () {
                function SeasonModule() {
                }
                SeasonModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            router_1.RouterModule,
                            http_1.HttpModule
                        ],
                        declarations: [
                            season_form_component_1.SeasonFormComponent,
                            season_component_1.SeasonComponent
                        ],
                        exports: [
                            season_form_component_1.SeasonFormComponent,
                            season_component_1.SeasonComponent
                        ],
                        providers: [
                            season_service_1.SeasonService,
                            prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SeasonModule);
                return SeasonModule;
            }());
            exports_1("SeasonModule", SeasonModule);
        }
    }
});
//# sourceMappingURL=season.module.js.map