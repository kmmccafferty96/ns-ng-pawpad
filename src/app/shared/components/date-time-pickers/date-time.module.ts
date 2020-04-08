import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
    imports: [],
    declarations: [DatePickerComponent, TimePickerComponent],
    exports: [DatePickerComponent, TimePickerComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class DateTimeModule {}
