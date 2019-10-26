import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Visibility } from "tns-core-modules/ui/enums";
import { Page } from "tns-core-modules/ui/page/page";
import { DatePicker } from "tns-core-modules/ui/date-picker/date-picker";

@Component({
    selector: "ns-date-picker",
    templateUrl: "./date-picker.component.html",
    styleUrls: ["./date-picker.component.scss", "../date-time.scss"]
})
export class DatePickerComponent implements OnInit {

    private selectDateGridLayout: GridLayout;
    private overlayGridLayout: GridLayout;
    private datePicker: DatePicker;

    @Input() title: string = "Select Date";
    @Input() date: Date = new Date();
    @Input() minDate: Date = new Date(1990, 1, 1);
    @Input() maxDate: Date = new Date(3000, 1, 1);
    @Output() selectedDate: EventEmitter<Date> = new EventEmitter<Date>();

    constructor(private page: Page) {}

    ngOnInit() {
        this.selectDateGridLayout = this.page.getViewById('selectDateGridLayout');
        this.overlayGridLayout = this.page.getViewById('overlayGridLayout');
        this.datePicker = this.page.getViewById('datePicker');
    }

    open() {
        this.selectDateGridLayout.visibility = <any>Visibility.visible;
        this.selectDateGridLayout.className = 'select-date animate-bounceInUp-delay-0ms';
        this.overlayGridLayout.animate({ opacity: 0.5, duration: 300 });

        this.date = this.datePicker.date;
    }

    close() {
        this.selectDateGridLayout.className = 'select-date';
        this.overlayGridLayout.animate({ opacity: 0, duration: 300 })
            .then(() => {
                this.selectDateGridLayout.visibility = <any>Visibility.collapse;
            })
            .catch(() => {
            });
    }

    onSubmit() {
        this.selectedDate.emit(this.datePicker.date);
        this.close();
    }

    onCancel() {
        this.datePicker.date = this.date;
        this.close();
    }
}
