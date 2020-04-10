import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { BoardingComponent } from './boarding.component';
import { DateTimeModule } from '../../shared/components/date-time-pickers/date-time.module';

@NgModule({
    declarations: [BoardingComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: BoardingComponent }]),
        AppCommonModule,
        SharedComponentsModule,
        DateTimeModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class BoardingModule {}
