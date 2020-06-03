import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular/common';
import { NativeScriptRouterModule } from '@nativescript/angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { HomeComponent } from './home.component';
import { CurrentDaycareCardComponent } from './current-daycare-card/current-daycare-card.component';
import { UserBoardingState } from '../../shared/store/states/user-boarding.state';
import { UserDaycareState } from '../../shared/store/states/user-daycare.state';

@NgModule({
    declarations: [HomeComponent, CurrentDaycareCardComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: HomeComponent }]),
        AppCommonModule,
        SharedComponentsModule,
        NgxsModule.forFeature([UserBoardingState, UserDaycareState]),
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
