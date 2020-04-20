import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';

import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { BoardingComponent } from './boarding.component';
import { DatePickerSheetComponent } from './date-picker-sheet/date-picker-sheet.component';

@NgModule({
    declarations: [BoardingComponent, DatePickerSheetComponent],
    entryComponents: [DatePickerSheetComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: BoardingComponent }]),
        AppCommonModule,
        SharedComponentsModule,
        NativeScriptUICalendarModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class BoardingModule {}
