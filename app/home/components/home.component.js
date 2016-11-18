System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(elementRef) {
                    this.elementRef = elementRef;
                }
                HomeComponent.prototype.ngAfterContentInit = function () {
                    this.addScript('assets/AdminLTE/plugins/datepicker/bootstrap-datepicker.js');
                    this.addScript('app/home/components/js/home.js');
                };
                HomeComponent.prototype.addScript = function (src) {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.src = src;
                    this.elementRef.nativeElement.appendChild(s);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/home/components/html/home.template.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map