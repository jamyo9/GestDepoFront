System.register(['@angular/core', '@angular/router', '../../auth/services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var AuthDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AuthDirective = (function () {
                function AuthDirective(_router, _elementRef, _authService) {
                    this._router = _router;
                    this._elementRef = _elementRef;
                    this._authService = _authService;
                }
                AuthDirective.prototype.ngAfterViewInit = function () {
                    if (!this._authService.isLoggedIn()) {
                        var el = this._elementRef.nativeElement;
                        el.parentNode.removeChild(el);
                    }
                };
                __decorate([
                    core_1.HostBinding('hidden'), 
                    __metadata('design:type', Boolean)
                ], AuthDirective.prototype, "hideRouterLink", void 0);
                AuthDirective = __decorate([
                    core_1.Directive({
                        selector: '[auth]'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, auth_service_1.AuthService])
                ], AuthDirective);
                return AuthDirective;
            }());
            exports_1("AuthDirective", AuthDirective);
        }
    }
});
//# sourceMappingURL=auth.directive.js.map