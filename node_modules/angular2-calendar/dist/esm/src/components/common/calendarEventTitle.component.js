import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var CalendarEventTitleComponent = (function () {
    function CalendarEventTitleComponent() {
    }
    CalendarEventTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-event-title',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <a\n      class=\"cal-event-title\"\n      href=\"javascript:;\"\n      [innerHTML]=\"event | calendarEventTitle:view\">\n    </a>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarEventTitleComponent.ctorParameters = [];
    CalendarEventTitleComponent.propDecorators = {
        'event': [{ type: Input },],
        'view': [{ type: Input },],
    };
    return CalendarEventTitleComponent;
}());
//# sourceMappingURL=calendarEventTitle.component.js.map