import { Component, OnInit, ViewChild } from "@angular/core";
import { DatePickerComponent } from "~/app/shared/ui/date-picker/date-picker.component";

@Component({
    selector: "ns-booking",
    templateUrl: "./booking.component.html",
    styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {
    @ViewChild('startDatePicker', { static: false }) startDatePicker: DatePickerComponent;
    @ViewChild('endDatePicker', { static: false }) endDatePicker: DatePickerComponent;
    startDate: Date = new Date(2018, 7, 1);
    endDate: Date = new Date(2018, 7, 1);
    minDate: Date = new Date();
    maxDate: Date = new Date();

    constructor(){}

    ngOnInit() {
        this.maxDate.setDate(this.minDate.getDate() + 14);
    }
}
