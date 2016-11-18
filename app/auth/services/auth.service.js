System.register(['@angular/core', '@angular/http', '@angular/router', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                    this._loggedIn = false;
                    this._baseUrl = 'http://localhost:9080/GestDepoAPI/auth/';
                    this._loggedIn = !!localStorage.getItem('auth_token');
                }
                AuthService.prototype.login = function (email, password) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    localStorage.setItem('auth_token', 'true');
                    return true;
                    /*
                    return this._http.post(
                            //this._baseUrl + 'login',
                            'http://jsonplaceholder.typicode.com/posts',
                            JSON.stringify({ email, password }),
                            { headers }
                        )
                        .map(res => res.json())
                        .map((res) => {
                            if (res.success) {
                                //localStorage.setItem('auth_token', res.auth_token);
                                localStorage.setItem('auth_token', 'true');
                                this._loggedIn = true;
                                if (this.redirectUrl) {
                                    this._router.navigate([this.redirectUrl]);
                                    this.redirectUrl = null;
                                }
                            }
              
                            return res.success;
                        });
                      */
                    /*
                    let body = JSON.stringify({ email, password });
                    let headers = new Headers({ 'Content-Type': 'application/json' });
                    let options = new RequestOptions({ headers: headers });
                    var ret =  this._http.post(
                            //this._baseUrl,
                            'http://jsonplaceholder.typicode.com/posts',
                            body,
                            options
                        ).map(res => res.json());
                    */
                    /*
                    let body = JSON.stringify(email);
                    var ret = this._http.post('http://jsonplaceholder.typicode.com/users', body)
                              .map(res => res.json());
                    
                    return ret;
                    */
                };
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('auth_token');
                    this._loggedIn = false;
                };
                AuthService.prototype.isLoggedIn = function () {
                    return this._loggedIn;
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map