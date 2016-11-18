System.register(['@angular/core', '@angular/router', '../services/season.service'], function(exports_1, context_1) {
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
    var core_1, router_1, season_service_1;
    var SeasonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (season_service_1_1) {
                season_service_1 = season_service_1_1;
            }],
        execute: function() {
            SeasonComponent = (function () {
                function SeasonComponent(_seasonService) {
                    this._seasonService = _seasonService;
                }
                SeasonComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._seasonService.getSeasons()
                        .then(function (data) {
                        _this.seasons = data;
                    });
                    this._seasonService.getLastSeason()
                        .then(function (data) {
                        _this.lastSeason = data;
                    });
                };
                SeasonComponent.prototype.deleteSeason = function (season) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + season.name + "?")) {
                        var index = this.seasons.indexOf(season);
                        // Here, with the splice method, we remove 1 object
                        // at the given index.
                        this.seasons.splice(index, 1);
                        this._seasonService.deleteSeason(season.seasonId)
                            .subscribe(null, function (err) {
                            alert("Could not delete the season.");
                            _this.seasons.splice(index, 0, season);
                        });
                    }
                };
                SeasonComponent = __decorate([
                    core_1.Component({
                        selector: 'season',
                        templateUrl: 'app/season/components/html/season.template.html',
                        providers: [
                            season_service_1.SeasonService
                        ],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [season_service_1.SeasonService])
                ], SeasonComponent);
                return SeasonComponent;
            }());
            exports_1("SeasonComponent", SeasonComponent);
        }
    }
});
//# sourceMappingURL=season.component.js.map