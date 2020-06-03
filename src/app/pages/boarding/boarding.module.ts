import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular/common';
import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';
import { NgxsModule } from '@ngxs/store';

import { BoardingRoutingModule } from './boarding-routing.module';
import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { DatePickerModule } from '../../shared/components/date-picker/date-picker.module';
import { BoardingComponent } from './boarding.component';
import { EditBoardingComponent } from './edit-boarding/edit-boarding.component';
import { UserBoardingState } from '../../shared/store/states/user-boarding.state';

@NgModule({
    declarations: [BoardingComponent, EditBoardingComponent],
    imports: [
        NativeScriptCommonModule,
        BoardingRoutingModule,
        AppCommonModule,
        SharedComponentsModule,
        NativeScriptUICalendarModule,
        DatePickerModule,
        NgxsModule.forFeature([UserBoardingState]),
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class BoardingModule {}
