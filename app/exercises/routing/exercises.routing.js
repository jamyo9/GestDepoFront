System.register(['@angular/router', '../components/exercise-form.component', '../components/exercises.component', '../components/detail.component', '../../prevent-unsaved-changes-guard.service', '../../auth/services/auth-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, exercise_form_component_1, exercises_component_1, detail_component_1, prevent_unsaved_changes_guard_service_1, auth_guard_service_1;
    var exercisesRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            }],
        execute: function() {
            exports_1("exercisesRouting", exercisesRouting = router_1.RouterModule.forChild([
                {
                    path: 'exercises',
                    component: exercises_component_1.ExercisesComponent,
                    canActivate: [auth_guard_service_1.AuthGuard]
                },
                {
                    path: 'exercises/:id',
                    component: exercise_form_component_1.ExerciseFormComponent,
                    canActivate: [auth_guard_service_1.AuthGuard],
                    canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                },
                {
                    path: 'exercises/new',
                    component: exercise_form_component_1.ExerciseFormComponent,
                    canActivate: [auth_guard_service_1.AuthGuard],
                    canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                },
                {
                    path: 'exercises/view/:id',
                    component: detail_component_1.ExerciseDetailComponent,
                    canActivate: [auth_guard_service_1.AuthGuard]
                }
            ]));
        }
    }
});
//# sourceMappingURL=exercises.routing.js.map