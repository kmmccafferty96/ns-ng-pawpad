import { Component, ViewContainerRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { DateRange } from 'nativescript-ui-calendar';
import { BottomSheetOptions } from 'nativescript-material-bottomsheet/angular';
import { take } from 'rxjs/operators';

import { PageBase } from '../../../shared/classes/page-base';
import { DatePickerSheetComponent } from '../../../shared/components/date-picker/date-picker-sheet/date-picker-sheet.component';
import { SheetService } from '../../../shared/services/sheet.service';

@Component({
    selector: 'ns-edit-boarding',
    templateUrl: './edit-boarding.component.html',
    styleUrls: ['./edit-boarding.component.scss'],
})
export class EditBoardingComponent extends PageBase {
    dateRange: DateRange;

    constructor(page: Page, private _sheetService: SheetService, private _viewContainerRef: ViewContainerRef) {
        super(page);
    }
    openDateSheet() {
        const options: BottomSheetOptions = {
            viewContainerRef: this._viewContainerRef,
            context: this.dateRange,
        };

        this._sheetService
            .show(DatePickerSheetComponent, options)
            .pipe(take(1))
            .subscribe((result) => {
                if (result) {
                    this.dateRange = result;
                }
            });
    }
}
