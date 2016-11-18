System.register(['@angular/core', '@angular/router', '../services/players.service'], function(exports_1, context_1) {
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
    var core_1, router_1, players_service_1;
    var PlayersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            }],
        execute: function() {
            PlayersComponent = (function () {
                function PlayersComponent(_playersService, _router, _route) {
                    this._playersService = _playersService;
                    this._router = _router;
                    this._route = _route;
                }
                PlayersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var seasonId = this._route.params.subscribe(function (params) {
                        var seasonId = +params["seasonId"];
                        if (!seasonId) {
                            _this._playersService.getPlayers(0)
                                .then(function (data) {
                                _this.players = data;
                            });
                        }
                        _this._playersService.getPlayers(seasonId)
                            .then(function (players) { return _this.players = players; }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    });
                };
                PlayersComponent.prototype.deletePlayer = function (player) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + player.name + "?")) {
                        var index = this.players.indexOf(player);
                        // Here, with the splice method, we remove 1 object
                        // at the given index.
                        this.players.splice(index, 1);
                        this._playersService.deletePlayer(player.userId)
                            .subscribe(null, function (err) {
                            alert("Could not delete the player.");
                            // Revert the view back to its original state
                            // by putting the player object at the index
                            // it used to be.
                            _this.players.splice(index, 0, player);
                        });
                    }
                };
                PlayersComponent = __decorate([
                    core_1.Component({
                        selector: 'players',
                        templateUrl: 'app/players/components/html/players.template.html',
                        providers: [players_service_1.PlayersService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [players_service_1.PlayersService, router_1.Router, router_1.ActivatedRoute])
                ], PlayersComponent);
                return PlayersComponent;
            }());
            exports_1("PlayersComponent", PlayersComponent);
        }
    }
});
//# sourceMappingURL=players.component.js.map