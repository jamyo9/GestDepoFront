System.register(['@angular/core', '@angular/forms', '@angular/router', '../services/season.service', '../../objects/season.object'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, season_service_1, season_object_1;
    var SeasonFormComponent;
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
            function (season_service_1_1) {
                season_service_1 = season_service_1_1;
            },
            function (season_object_1_1) {
                season_object_1 = season_object_1_1;
            }],
        execute: function() {
            SeasonFormComponent = (function () {
                function SeasonFormComponent(fb, _router, _route, _seasonService) {
                    this._router = _router;
                    this._route = _route;
                    this._seasonService = _seasonService;
                    this.season = new season_object_1.Season();
                    this.form = fb.group({
                        seasonId: [],
                        name: ['', forms_1.Validators.required]
                    });
                }
                SeasonFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var seasonId = this._route.params.subscribe(function (params) {
                        var seasonId = +params["seasonId"];
                        _this.title = seasonId ? "Edit Season" : "New Season";
                        if (!seasonId)
                            return;
                        _this._seasonService.getSeason(seasonId)
                            .subscribe(function (season) { return _this.season = season; }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    });
                };
                SeasonFormComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.season.seasonId) {
                        result = this._seasonService.updateSeason(this.season);
                    }
                    else {
                        result = this._seasonService.createSeason(this.season);
                    }
                    result.subscribe(function (x) {
                        //this.form.markAsPristine();
                        _this._router.navigate(['season']);
                    });
                };
                SeasonFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/season/components/html/season-form.template.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, season_service_1.SeasonService])
                ], SeasonFormComponent);
                return SeasonFormComponent;
            }());
            exports_1("SeasonFormComponent", SeasonFormComponent);
        }
    }
});
//# sourceMappingURL=season-form.component.js.map