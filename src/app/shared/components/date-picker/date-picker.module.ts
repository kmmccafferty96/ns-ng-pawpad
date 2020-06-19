import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DatePickerComponent } from './date-picker.component';
import { DatePickerSheetComponent } from './date-picker-sheet/date-picker-sheet.component';

@NgModule({
    declarations: [DatePickerComponent, DatePickerSheetComponent],
    exports: [DatePickerComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class DatePickerModule {}
