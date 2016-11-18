System.register(['@angular/core', '@angular/router', '../services/exercises.service'], function(exports_1, context_1) {
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
    var core_1, router_1, exercises_service_1;
    var ExercisesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (exercises_service_1_1) {
                exercises_service_1 = exercises_service_1_1;
            }],
        execute: function() {
            ExercisesComponent = (function () {
                function ExercisesComponent(_exercisesService) {
                    this._exercisesService = _exercisesService;
                }
                ExercisesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._exercisesService.getExercises()
                        .then(function (data) {
                        _this.exercises = data;
                    });
                };
                ExercisesComponent.prototype.deleteExercise = function (exercise) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + exercise.name + "?")) {
                        var index = this.exercises.indexOf(exercise);
                        // Here, with the splice method, we remove 1 object
                        // at the given index.
                        this.exercises.splice(index, 1);
                        this._exercisesService.deleteExercise(exercise.exerciseId)
                            .subscribe(null, function (err) {
                            alert("Could not delete the exercise.");
                            // Revert the view back to its original state
                            // by putting the exercise object at the index
                            // it used to be.
                            _this.exercises.splice(index, 0, exercise);
                        });
                    }
                };
                ExercisesComponent = __decorate([
                    core_1.Component({
                        selector: 'exercises',
                        templateUrl: 'app/exercises/components/html/exercises.template.html',
                        providers: [exercises_service_1.ExercisesService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [exercises_service_1.ExercisesService])
                ], ExercisesComponent);
                return ExercisesComponent;
            }());
            exports_1("ExercisesComponent", ExercisesComponent);
        }
    }
});
//# sourceMappingURL=exercises.component.js.map