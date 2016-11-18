System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', '@angular/http', './components/exercise-form.component', './components/exercises.component', './components/detail.component', './services/exercises.service', '../prevent-unsaved-changes-guard.service', '../shared/shared.module'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, router_1, http_1, exercise_form_component_1, exercises_component_1, detail_component_1, exercises_service_1, prevent_unsaved_changes_guard_service_1, shared_module_1;
    var ExercisesModule;
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
            function (exercise_form_component_1_1) {
                exercise_form_component_1 = exercise_form_component_1_1;
            },
            function (exercises_component_1_1) {
                exercises_component_1 = exercises_component_1_1;
            },
            function (detail_component_1_1) {
                detail_component_1 = detail_component_1_1;
            },
            function (exercises_service_1_1) {
                exercises_service_1 = exercises_service_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            }],
        execute: function() {
            ExercisesModule = (function () {
                function ExercisesModule() {
                }
                ExercisesModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            router_1.RouterModule,
                            http_1.HttpModule,
                            shared_module_1.SharedModule
                        ],
                        declarations: [
                            exercise_form_component_1.ExerciseFormComponent,
                            exercises_component_1.ExercisesComponent,
                            detail_component_1.ExerciseDetailComponent
                        ],
                        exports: [
                            exercise_form_component_1.ExerciseFormComponent,
                            exercises_component_1.ExercisesComponent,
                            detail_component_1.ExerciseDetailComponent
                        ],
                        providers: [
                            exercises_service_1.ExercisesService,
                            prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExercisesModule);
                return ExercisesModule;
            }());
            exports_1("ExercisesModule", ExercisesModule);
        }
    }
});
//# sourceMappingURL=exercises.module.js.map