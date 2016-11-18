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
    var ExerciseDetailComponent;
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
            ExerciseDetailComponent = (function () {
                function ExerciseDetailComponent(_exerciseService, _router, _route, elementRef) {
                    this._exerciseService = _exerciseService;
                    this._router = _router;
                    this._route = _route;
                    this.elementRef = elementRef;
                }
                ExerciseDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var exerciseId = this._route.params.subscribe(function (params) {
                        var exerciseId = +params["id"];
                        if (!exerciseId)
                            return;
                        _this._exerciseService.getExercise(exerciseId)
                            .subscribe(function (exercise) {
                            _this.exercise = exercise;
                        }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    });
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.src = "app/exercises/components/js/detail.js";
                    this.elementRef.nativeElement.appendChild(s);
                };
                ExerciseDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'exercise',
                        templateUrl: 'app/exercises/components/html/exercise.detail.template.html',
                        providers: [exercises_service_1.ExercisesService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [exercises_service_1.ExercisesService, router_1.Router, router_1.ActivatedRoute, core_1.ElementRef])
                ], ExerciseDetailComponent);
                return ExerciseDetailComponent;
            }());
            exports_1("ExerciseDetailComponent", ExerciseDetailComponent);
        }
    }
});
//# sourceMappingURL=detail.component.js.map