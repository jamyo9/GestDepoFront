System.register(['@angular/core', '@angular/forms', '@angular/router', '../../shared/validators/basicValidators', '../services/players.service', '../../objects/player.object'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, basicValidators_1, players_service_1, player_object_1;
    var PlayerFormComponent;
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
            function (basicValidators_1_1) {
                basicValidators_1 = basicValidators_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (player_object_1_1) {
                player_object_1 = player_object_1_1;
            }],
        execute: function() {
            PlayerFormComponent = (function () {
                function PlayerFormComponent(fb, _router, _route, _playerService) {
                    this._router = _router;
                    this._route = _route;
                    this._playerService = _playerService;
                    this.player = new player_object_1.Player();
                    this.form = fb.group({
                        name: ['', forms_1.Validators.required],
                        email: ['', basicValidators_1.BasicValidators.email],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                PlayerFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._route.params.subscribe(function (params) {
                        var id = +params["id"];
                        _this.title = id ? "Edit Player" : "New Player";
                        if (!id)
                            return;
                        _this._playerService.getPlayer(id)
                            .subscribe(function (player) { return _this.player = player; }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    });
                };
                PlayerFormComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.player.userId)
                        result = this._playerService.updatePlayer(this.player);
                    else
                        result = this._playerService.createPlayer(this.player);
                    result.subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['players']);
                    });
                };
                PlayerFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/players/components/html/player-form.template.html',
                        providers: [players_service_1.PlayersService]
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, players_service_1.PlayersService])
                ], PlayerFormComponent);
                return PlayerFormComponent;
            }());
            exports_1("PlayerFormComponent", PlayerFormComponent);
        }
    }
});
//# sourceMappingURL=player-form.component.js.map