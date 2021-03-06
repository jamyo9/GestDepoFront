System.register(['@angular/core', '@angular/router', '../services/auth.service'], function(exports_1, context_1) {
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
    var LoginComponent;
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
            LoginComponent = (function () {
                function LoginComponent(_router, _authService, _applicationRef) {
                    this._router = _router;
                    this._authService = _authService;
                    this._applicationRef = _applicationRef;
                }
                LoginComponent.prototype.login = function (event, username, password) {
                    event.preventDefault();
                    var result = this._authService.login(username, password);
                    /*
                    result.subscribe(x => {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        this._router.navigate(['/']);
                    });
                    */
                    if (result) {
                        console.log(this._router);
                        if (this._authService.redirectUrl) {
                            this._router.navigate([this._authService.redirectUrl]);
                            this._authService.redirectUrl = null;
                        }
                        //this._router.navigate(['']);
                        location.reload();
                    }
                    else {
                        console.log("Login failed, display error to user");
                        alert("Could not login.");
                    }
                };
                LoginComponent.prototype.signup = function (event) {
                    event.preventDefault();
                    this._router.navigate(['/users/new']);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/auth/components/html/login.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, core_1.ApplicationRef])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map