import { Component, OnInit, ViewChild } from '@angular/core';

import { PageBase } from '../../shared/helpers/classes/page-base';
import { DatePickerComponent } from '../../shared/components/date-time-pickers/date-picker/date-picker.component';
import { TimePickerComponent } from '../../shared/components/date-time-pickers/time-picker/time-picker.component';

@Component({
    selector: 'ns-boarding',
    templateUrl: './boarding.component.html',
    styleUrls: ['./boarding.component.css'],
})
export class BoardingComponent extends PageBase implements OnInit {
    @ViewChild('startDatePicker', { static: false }) startDatePicker: DatePickerComponent;
    @ViewChild('endDatePicker', { static: false }) endDatePicker: DatePickerComponent;
    @ViewChild('timePicker', { static: false }) timePicker: TimePickerComponent;
    startDate: Date = new Date(2018, 7, 1);
    endDate: Date = new Date(2018, 7, 1);
    minDate: Date = new Date();
    maxDate: Date = new Date();
    startTime: Date = new Date(0, 0, 0, 12, 0);
    minHour: number = 9;
    maxHour: number = 17;
    minuteInterval: number = 15;

    ngOnInit() {
        this.maxDate.setDate(this.minDate.getDate() + 14);
    }
}
