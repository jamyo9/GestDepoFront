import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, LOCALE_ID, Inject } from '@angular/core';
import { getWeekViewHeader, getWeekView } from 'calendar-utils';
export var CalendarWeekViewComponent = (function () {
    function CalendarWeekViewComponent(cdr, locale) {
        this.cdr = cdr;
        /**
         * An array of events to display on view
         */
        this.events = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'bottom';
        /**
         * Called when a header week day is clicked
         */
        this.dayClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
        this.eventRows = [];
        this.locale = locale;
    }
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate) {
            this.refreshHeader();
        }
        if (changes.events || changes.viewDate) {
            this.refreshBody();
        }
    };
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn
        });
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.eventRows = getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn
        });
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    CalendarWeekViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-week-view',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"cal-week-view\">\n      <div class=\"cal-day-headers\">\n        <mwl-calendar-week-view-header\n          *ngFor=\"let day of days\"\n          [day]=\"day\"\n          [locale]=\"locale\"\n          (click)=\"dayClicked.emit({date: day.date})\">\n        </mwl-calendar-week-view-header>\n      </div>\n      <div *ngFor=\"let eventRow of eventRows\">\n        <div\n          class=\"cal-event-container\"\n          *ngFor=\"let weekEvent of eventRow.row\"\n          [style.width]=\"((100 / 7) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / 7) * weekEvent.offset) + '%'\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewComponent.ctorParameters = [
        { type: ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
    ];
    CalendarWeekViewComponent.propDecorators = {
        'viewDate': [{ type: Input },],
        'events': [{ type: Input },],
        'refresh': [{ type: Input },],
        'locale': [{ type: Input },],
        'tooltipPlacement': [{ type: Input },],
        'weekStartsOn': [{ type: Input },],
        'dayClicked': [{ type: Output },],
        'eventClicked': [{ type: Output },],
    };
    return CalendarWeekViewComponent;
}());
//# sourceMappingURL=calendarWeekView.component.js.map