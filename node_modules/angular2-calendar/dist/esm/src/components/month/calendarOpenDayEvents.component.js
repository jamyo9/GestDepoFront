import { Component, Input, ChangeDetectionStrategy, trigger, style, transition, animate, Output, EventEmitter } from '@angular/core';
export var CalendarOpenDayEventsComponent = (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new EventEmitter();
    }
    CalendarOpenDayEventsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-open-day-events',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <div\n        *ngFor=\"let event of events\"\n        [ngClass]=\"event?.cssClass\">\n        <span class=\"cal-event\" [style.backgroundColor]=\"event.color.primary\"></span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          view=\"month\"\n          (click)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </div>\n  ",
                    animations: [
                        trigger('collapse', [
                            transition('void => *', [
                                style({ height: 0 }),
                                animate('150ms linear', style({ height: '*' }))
                            ]),
                            transition('* => void', [
                                style({ height: '*' }),
                                animate('150ms linear', style({ height: 0 }))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    CalendarOpenDayEventsComponent.ctorParameters = [];
    CalendarOpenDayEventsComponent.propDecorators = {
        'isOpen': [{ type: Input },],
        'events': [{ type: Input },],
        'eventClicked': [{ type: Output },],
    };
    return CalendarOpenDayEventsComponent;
}());
//# sourceMappingURL=calendarOpenDayEvents.component.js.map