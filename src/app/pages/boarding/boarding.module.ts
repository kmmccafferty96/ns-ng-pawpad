import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { BoardingComponent } from './boarding.component';
import { SharedModule } from '../../shared/shared.module';
import { DateTimeModule } from '../../shared/components/date-time-pickers/date-time.module';

@NgModule({
    declarations: [BoardingComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: BoardingComponent }]),
        SharedModule,
        DateTimeModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class BoardingModule {}
