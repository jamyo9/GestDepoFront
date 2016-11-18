import { EventEmitter } from '@angular/core';
import { DayViewEvent } from 'calendar-utils';
export declare class CalendarDayViewEventComponent {
    dayEvent: DayViewEvent;
    eventClicked: EventEmitter<any>;
}
