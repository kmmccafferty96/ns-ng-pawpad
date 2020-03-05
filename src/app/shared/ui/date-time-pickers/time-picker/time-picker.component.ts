import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Visibility } from 'tns-core-modules/ui/enums';
import { Page } from 'tns-core-modules/ui/page/page';
import { TimePicker } from 'tns-core-modules/ui/time-picker/time-picker';

@Component({
    selector: 'ns-time-picker',
    templateUrl: './time-picker.component.html',
    styleUrls: ['./time-picker.component.scss', '../date-time.scss'],
})
export class TimePickerComponent implements OnInit {
    private selectTimeGridLayout: GridLayout;
    private overlayGridLayout: GridLayout;
    private timePicker: TimePicker;

    @Input() title: string = 'Select Time';
    @Input() time: Date = new Date();
    @Input() minuteInterval: number = 1;
    @Input() minHour: number = 0;
    @Input() maxHour: number = 23;
    @Output() selectedTime: EventEmitter<Date> = new EventEmitter<Date>();

    constructor(private page: Page) {}

    ngOnInit() {
        this.selectTimeGridLayout = this.page.getViewById('selectTimeGridLayout');
        this.overlayGridLayout = this.page.getViewById('overlayGridLayout');
        this.timePicker = this.page.getViewById('timePicker');
    }

    open() {
        this.selectTimeGridLayout.visibility = <any>Visibility.visible;
        this.selectTimeGridLayout.className = 'select-date animate-bounceInUp-delay-0ms';
        this.overlayGridLayout.animate({ opacity: 0.5, duration: 300 });

        this.time = this.timePicker.time;
    }

    close() {
        this.selectTimeGridLayout.className = 'select-date';
        this.overlayGridLayout
            .animate({ opacity: 0, duration: 300 })
            .then(() => {
                this.selectTimeGridLayout.visibility = <any>Visibility.collapse;
            })
            .catch(() => {});
    }

    onSubmit() {
        this.selectedTime.emit(this.timePicker.time);
        console.log(this.timePicker.time);
        this.close();
    }

    onCancel() {
        this.timePicker.time = this.time;
        this.close();
    }
}
