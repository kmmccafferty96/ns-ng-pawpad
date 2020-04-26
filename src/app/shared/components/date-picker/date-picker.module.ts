import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DatePickerSheetComponent } from './date-picker-sheet/date-picker-sheet.component';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
    declarations: [DatePickerSheetComponent, DatePickerComponent],
    entryComponents: [DatePickerSheetComponent],
    exports: [DatePickerComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class DatePickerModule {}
