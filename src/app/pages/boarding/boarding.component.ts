import { Component, ViewContainerRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { BottomSheetOptions } from 'nativescript-material-bottomsheet/angular';

import { PageBase } from '../../shared/helpers/classes/page-base';
import { SheetService } from '../../shared/services/sheet.service';
import { DatePickerSheetComponent } from './date-picker-sheet/date-picker-sheet.component';
import { DateRange } from 'nativescript-ui-calendar';

@Component({
    selector: 'ns-boarding',
    templateUrl: './boarding.component.html',
    styleUrls: ['./boarding.component.scss'],
})
export class BoardingComponent extends PageBase {
    dateRange: DateRange;

    constructor(page: Page, private _sheetService: SheetService, private _viewContainerRef: ViewContainerRef) {
        super(page);
    }

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
