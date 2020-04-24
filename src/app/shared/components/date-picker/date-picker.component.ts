import { Component, ViewContainerRef } from '@angular/core';
import { DateRange } from 'nativescript-ui-calendar';
import { BottomSheetOptions } from 'nativescript-material-bottomsheet/angular';

import { DatePickerSheetComponent } from './date-picker-sheet/date-picker-sheet.component';
import { SheetService } from '../../services/sheet.service';

@Component({
    selector: 'ns-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
    dateRange: DateRange;

    constructor(private _sheetService: SheetService, private _viewContainerRef: ViewContainerRef) {}

    openDateSheet() {
        const options: BottomSheetOptions = {
            viewContainerRef: this._viewContainerRef,
            context: this.dateRange,
        };

        this._sheetService.show(DatePickerSheetComponent, options).subscribe((result) => {
            if (result) {
                this.dateRange = result;
            }
        });
    }
}
