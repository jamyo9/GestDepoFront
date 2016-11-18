import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import addMinutes from 'date-fns/add_minutes';
export var CalendarDayViewEventComponent = (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new EventEmitter();
        this.eventResized = new EventEmitter();
    }
    CalendarDayViewEventComponent.prototype.resizeStarted = function (event, resizeEvent) {
        this.currentResize = {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        };
    };
    CalendarDayViewEventComponent.prototype.resizing = function (event, resizeEvent) {
        if (resizeEvent.edges.top) {
            event.top = this.currentResize.originalTop + +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = this.currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewEventComponent.prototype.resizeEnded = function (dayEvent) {
        var segments;
        if (this.currentResize.edge === 'top') {
            segments = (dayEvent.top - this.currentResize.originalTop) / this.eventSnapSize;
        }
        else {
            segments = (dayEvent.height - this.currentResize.originalHeight) / this.eventSnapSize;
        }
        dayEvent.top = this.currentResize.originalTop;
        dayEvent.height = this.currentResize.originalHeight;
        var segmentAmountInMinutes = 60 / this.hourSegments;
        var minutesMoved = segments * segmentAmountInMinutes;
        var newStart = dayEvent.event.start;
        var newEnd = dayEvent.event.end;
        if (this.currentResize.edge === 'top') {
            newStart = addMinutes(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = addMinutes(newEnd, minutesMoved);
        }
        this.eventResized.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    CalendarDayViewEventComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-day-view-event',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div\n      class=\"cal-event\"\n      [style.marginTop.px]=\"dayEvent.top\"\n      [style.marginLeft.px]=\"dayEvent.left + 70\"\n      [style.height.px]=\"dayEvent.height\"\n      [style.width.px]=\"dayEvent.width - 1\"\n      [style.backgroundColor]=\"dayEvent.event.color.secondary\"\n      [style.borderColor]=\"dayEvent.event.color.primary\"\n      [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n      [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n      [ngClass]=\"dayEvent.event.cssClass\"\n      [mwlCalendarTooltip]=\"dayEvent.event | calendarEventTitle:'dayTooltip'\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      mwlResizable\n      [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n      [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n      (resizeStart)=\"resizeStarted(dayEvent, $event)\"\n      (resizing)=\"resizing(dayEvent, $event)\"\n      (resizeEnd)=\"resizeEnded(dayEvent)\">\n      <mwl-calendar-event-title\n        [event]=\"dayEvent.event\"\n        view=\"day\"\n        (click)=\"eventClicked.emit()\">\n      </mwl-calendar-event-title>\n      <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewEventComponent.ctorParameters = [];
    CalendarDayViewEventComponent.propDecorators = {
        'dayEvent': [{ type: Input },],
        'hourSegments': [{ type: Input },],
        'eventSnapSize': [{ type: Input },],
        'tooltipPlacement': [{ type: Input },],
        'eventClicked': [{ type: Output },],
        'eventResized': [{ type: Output },],
    };
    return CalendarDayViewEventComponent;
}());
//# sourceMappingURL=calendarDayViewEvent.component.js.map