import { EventEmitter } from '@angular/core';
import { DayViewEvent } from 'calendar-utils';
import { ResizeEvent } from 'angular-resizable-element';
export declare class CalendarDayViewEventComponent {
    dayEvent: DayViewEvent;
    hourSegments: number;
    eventSnapSize: number;
    tooltipPlacement: string;
    eventClicked: EventEmitter<any>;
    eventResized: EventEmitter<any>;
    currentResize: {
        originalTop: number;
        originalHeight: number;
        edge: string;
    };
    resizeStarted(event: DayViewEvent, resizeEvent: ResizeEvent): void;
    resizing(event: DayViewEvent, resizeEvent: ResizeEvent): void;
    resizeEnded(dayEvent: DayViewEvent): void;
}
