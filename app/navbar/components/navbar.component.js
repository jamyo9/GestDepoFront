System.register(['@angular/core', '../../auth/components/login.component', '../../auth/directives/auth.directive', '../../auth/directives/no-auth.directive', '../../auth/services/auth.service'], function(exports_1, context_1) {
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
    var core_1, login_component_1, auth_directive_1, no_auth_directive_1, auth_service_1;
    var NavBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (auth_directive_1_1) {
                auth_directive_1 = auth_directive_1_1;
            },
            function (no_auth_directive_1_1) {
                no_auth_directive_1 = no_auth_directive_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            NavBarComponent = (function () {
                function NavBarComponent(_authService) {
                    this._authService = _authService;
                }
                NavBarComponent.prototype.logout = function () {
                    this._authService.logout();
                };
                NavBarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        templateUrl: 'app/navbar/components/html/navbar.component.html',
                        directives: [
                            login_component_1.LoginComponent,
                            auth_directive_1.AuthDirective,
                            no_auth_directive_1.NoAuthDirective
                        ],
                        providers: [
                            auth_service_1.AuthService
                        ]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService])
                ], NavBarComponent);
                return NavBarComponent;
            }());
            exports_1("NavBarComponent", NavBarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map