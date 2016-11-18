System.register(['@angular/core', 'date-fns', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, date_fns_1, Subject_1;
    var colors, SeasonCalendarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (date_fns_1_1) {
                date_fns_1 = date_fns_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            colors = {
                red: {
                    primary: '#ad2121',
                    secondary: '#FAE3E3'
                },
                blue: {
                    primary: '#1e90ff',
                    secondary: '#D1E8FF'
                },
                yellow: {
                    primary: '#e3bc08',
                    secondary: '#FDF1BA'
                }
            };
            SeasonCalendarComponent = (function () {
                function SeasonCalendarComponent() {
                    var _this = this;
                    this.view = 'month';
                    this.viewDate = new Date();
                    this.actions = [{
                            label: '<i class="fa fa-fw fa-pencil"></i>',
                            onClick: function (_a) {
                                var event = _a.event;
                                console.log('Edit event', event);
                            }
                        }, {
                            label: '<i class="fa fa-fw fa-times"></i>',
                            onClick: function (_a) {
                                var event = _a.event;
                                _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                            }
                        }];
                    this.refresh = new Subject_1.Subject();
                    this.events = [{
                            start: date_fns_1.subDays(date_fns_1.startOfDay(new Date()), 1),
                            end: date_fns_1.addDays(new Date(), 1),
                            title: 'A 3 day event',
                            color: colors.red,
                            actions: this.actions
                        }, {
                            start: date_fns_1.startOfDay(new Date()),
                            title: 'An event with no end date',
                            color: colors.yellow,
                            actions: this.actions
                        }, {
                            start: date_fns_1.subDays(date_fns_1.endOfMonth(new Date()), 3),
                            end: date_fns_1.addDays(date_fns_1.endOfMonth(new Date()), 3),
                            title: 'A long event that spans 2 months',
                            color: colors.blue
                        }, {
                            start: date_fns_1.addHours(date_fns_1.startOfDay(new Date()), 2),
                            end: new Date(),
                            title: 'A resizable event',
                            color: colors.yellow,
                            actions: this.actions,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true
                            }
                        }];
                    this.activeDayIsOpen = true;
                }
                SeasonCalendarComponent.prototype.increment = function () {
                    var addFn = {
                        day: date_fns_1.addDays,
                        week: date_fns_1.addWeeks,
                        month: date_fns_1.addMonths
                    }[this.view];
                    this.viewDate = addFn(this.viewDate, 1);
                };
                SeasonCalendarComponent.prototype.decrement = function () {
                    var subFn = {
                        day: date_fns_1.subDays,
                        week: date_fns_1.subWeeks,
                        month: date_fns_1.subMonths
                    }[this.view];
                    this.viewDate = subFn(this.viewDate, 1);
                };
                SeasonCalendarComponent.prototype.today = function () {
                    this.viewDate = new Date();
                };
                SeasonCalendarComponent.prototype.dayClicked = function (_a) {
                    var date = _a.date, events = _a.events;
                    if (date_fns_1.isSameMonth(date, this.viewDate)) {
                        if ((date_fns_1.isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                            events.length === 0) {
                            this.activeDayIsOpen = false;
                        }
                        else {
                            this.activeDayIsOpen = true;
                            this.viewDate = date;
                        }
                    }
                };
                SeasonCalendarComponent.prototype.eventTimesChanged = function (_a) {
                    var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
                    event.start = newStart;
                    event.end = newEnd;
                    this.refresh.next(''); //this.refresh.next();
                };
                SeasonCalendarComponent = __decorate([
                    core_1.Component({
                        selector: 'season-calendar',
                        styles: ["\n    h3 {\n      margin: 0;\n    }\n    .container {\n      padding-bottom: 50px;\n    }\n  "],
                        templateUrl: 'app/season/components/season-calendar.template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SeasonCalendarComponent);
                return SeasonCalendarComponent;
            }());
            exports_1("SeasonCalendarComponent", SeasonCalendarComponent);
        }
    }
});
//# sourceMappingURL=season-calendar.component.js.map