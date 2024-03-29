import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BottomSheetParams } from 'nativescript-material-bottomsheet/angular';
import { RadCalendarComponent } from 'nativescript-ui-calendar/angular/calendar-directives';
import { DateRange } from 'nativescript-ui-calendar';

/** Component passed to the bottom sheet service to display a date picker */
@Component({
    selector: 'ns-date-picker-sheet',
    templateUrl: './date-picker-sheet.component.html',
    styleUrls: ['./date-picker-sheet.component.scss'],
})
export class DatePickerSheetComponent implements AfterViewInit {
    /** Calendar in the template */
    @ViewChild('calendar', { static: false }) private calendarComponent: RadCalendarComponent;

    /** Current date for use in the template */
    currentDate: Date = new Date();

    constructor(private _bottomSheetParams: BottomSheetParams) {}

    ngAfterViewInit(): void {
        /* If a selected date range was passed in, set the calendar to it.
        Wrapped in a setTimeout because some calendar features aren't immediately
        available after the view initializes on Android. */
        setTimeout(() => {
            const dateRange: DateRange = this._bottomSheetParams.context;
            if (dateRange) {
                this.calendarComponent.nativeElement.displayedDate = dateRange.startDate;
                this.calendarComponent.nativeElement.selectedDateRange = dateRange;
            }
        });
    }

    /** Close the sheet (returns undefined) */
    close() {
        this._bottomSheetParams.closeCallback();
    }

    /** Save the calendar and return the selected date range (undefined if nothing selected) */
    save() {
        const dateRange = this.calendarComponent.nativeElement.selectedDateRange;
        this._bottomSheetParams.closeCallback(dateRange);
    }
}
