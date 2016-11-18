System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './shared/shared.module', './users/users.module', './exercises/exercises.module', './season/season.module', './posts/posts.module', './players/players.module', './auth/services/auth.service', './auth/services/auth-guard.service', './app.component', './home/components/home.component', './navbar/components/navbar.component', './errors/components/not-found.component', './users/routing/users.routing', './exercises/routing/exercises.routing', './season/routing/season.routing', './posts/routings/posts.routing', './players/routing/players.routing', './app.routing'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, shared_module_1, users_module_1, exercises_module_1, season_module_1, posts_module_1, players_module_1, auth_service_1, auth_guard_service_1, app_component_1, home_component_1, navbar_component_1, not_found_component_1, users_routing_1, exercises_routing_1, season_routing_1, posts_routing_1, players_routing_1, app_routing_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (users_module_1_1) {
                users_module_1 = users_module_1_1;
            },
            function (exercises_module_1_1) {
                exercises_module_1 = exercises_module_1_1;
            },
            function (season_module_1_1) {
                season_module_1 = season_module_1_1;
            },
            function (posts_module_1_1) {
                posts_module_1 = posts_module_1_1;
            },
            function (players_module_1_1) {
                players_module_1 = players_module_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (users_routing_1_1) {
                users_routing_1 = users_routing_1_1;
            },
            function (exercises_routing_1_1) {
                exercises_routing_1 = exercises_routing_1_1;
            },
            function (season_routing_1_1) {
                season_routing_1 = season_routing_1_1;
            },
            function (posts_routing_1_1) {
                posts_routing_1 = posts_routing_1_1;
            },
            function (players_routing_1_1) {
                players_routing_1 = players_routing_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            shared_module_1.SharedModule,
                            users_module_1.UsersModule,
                            exercises_module_1.ExercisesModule,
                            season_module_1.SeasonModule,
                            posts_module_1.PostsModule,
                            players_module_1.PlayersModule,
                            users_routing_1.usersRouting,
                            exercises_routing_1.exercisesRouting,
                            season_routing_1.seasonRouting,
                            posts_routing_1.postsRouting,
                            players_routing_1.playersRouting,
                            app_routing_1.routing
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            navbar_component_1.NavBarComponent,
                            not_found_component_1.NotFoundComponent
                        ],
                        providers: [
                            auth_service_1.AuthService,
                            auth_guard_service_1.AuthGuard
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map