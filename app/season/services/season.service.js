System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var SeasonService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            SeasonService = (function () {
                function SeasonService(_http) {
                    this._http = _http;
                    this._url = 'http://localhost:9080/GestDepoAPI/season/';
                }
                SeasonService.prototype.getSeasons = function () {
                    return this._http.get(this._url + "list")
                        .map(function (res) { return res.json(); })
                        .toPromise();
                };
                SeasonService.prototype.getLastSeason = function () {
                    return this._http.get(this._url + 'lastSeason')
                        .map(function (res) { return res.json(); }).toPromise();
                };
                SeasonService.prototype.createSeason = function (season) {
                    var body = JSON.stringify(season);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._url, body, options)
                        .map(function (res) { return res.json(); });
                };
                SeasonService.prototype.updateSeason = function (season) {
                    var body = JSON.stringify(season);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.put(this._url + season.seasonId, body, options)
                        .map(function (res) { return res.json(); });
                };
                SeasonService.prototype.getSeason = function (seasonId) {
                    return this._http.get(this._url + seasonId)
                        .map(function (res) { return res.json(); });
                };
                SeasonService.prototype.deleteSeason = function (seasonId) {
                    return this._http.delete(this._url + seasonId)
                        .map(function (res) { return res.json(); });
                };
                SeasonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SeasonService);
                return SeasonService;
            }());
            exports_1("SeasonService", SeasonService);
        }
    }
});
//# sourceMappingURL=season.service.js.map