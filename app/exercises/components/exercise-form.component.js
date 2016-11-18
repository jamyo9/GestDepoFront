System.register(['@angular/core', '@angular/forms', '@angular/router', '../services/exercises.service', '../../objects/exercise.object', '../services/fileupload.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, exercises_service_1, exercise_object_1, fileupload_service_1;
    var ExerciseFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (exercises_service_1_1) {
                exercises_service_1 = exercises_service_1_1;
            },
            function (exercise_object_1_1) {
                exercise_object_1 = exercise_object_1_1;
            },
            function (fileupload_service_1_1) {
                fileupload_service_1 = fileupload_service_1_1;
            }],
        execute: function() {
            ExerciseFormComponent = (function () {
                function ExerciseFormComponent(fb, _router, _route, _exerciseService, elementRef, _fileUploadService) {
                    this._router = _router;
                    this._route = _route;
                    this._exerciseService = _exerciseService;
                    this.elementRef = elementRef;
                    this._fileUploadService = _fileUploadService;
                    this.exercise = new exercise_object_1.Exercise();
                    this.form = fb.group({
                        exerciseId: [],
                        name: ['', forms_1.Validators.required],
                        description: ['', forms_1.Validators.required],
                        numberOfPlayers: [],
                        objective: [],
                        design: [],
                        video: []
                    });
                }
                ExerciseFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var exerciseId = this._route.params.subscribe(function (params) {
                        var exerciseId = +params["exerciseId"];
                        _this.title = exerciseId ? "Edit Exercise" : "New Exercise";
                        if (!exerciseId)
                            return;
                        _this._exerciseService.getExercise(exerciseId)
                            .subscribe(function (exercise) { return _this.exercise = exercise; }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    });
                    this.addScript('app/exercises/components/js/exercise-form.js');
                };
                ExerciseFormComponent.prototype.save = function (video) {
                    var _this = this;
                    var result;
                    /*
                    if (video.files) {
                        this._fileUploadService.upload(video.files)
                            .then(data => {
                                this.exercise.videoUrl = data;
                            })
                            .catch(error => {
                                this.exercise.videoUrl = 'ERROR';
                            });
                    }
                    */
                    //if (this.exercise.videoUrl != 'ERROR') {
                    if (this.exercise.exerciseId) {
                        result = this._exerciseService.updateExercise(this.exercise);
                    }
                    else {
                        result = this._exerciseService.createExercise(this.exercise);
                    }
                    result.subscribe(function (x) {
                        //this.form.markAsPristine();
                        _this._router.navigate(['exercises']);
                    });
                    //}
                };
                ExerciseFormComponent.prototype.addScript = function (src) {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.src = src;
                    this.elementRef.nativeElement.appendChild(s);
                };
                ExerciseFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/exercises/components/html/exercise-form.template.html',
                        //, styleUrls: ['app/exercises/components/styles/exercise.css']
                        providers: [fileupload_service_1.FileUploadService, exercises_service_1.ExercisesService]
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, exercises_service_1.ExercisesService, core_1.ElementRef, fileupload_service_1.FileUploadService])
                ], ExerciseFormComponent);
                return ExerciseFormComponent;
            }());
            exports_1("ExerciseFormComponent", ExerciseFormComponent);
        }
    }
});
//# sourceMappingURL=exercise-form.component.js.map