import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { HomeComponent } from './home.component';
import { CurrentDaycareCard } from './current-daycare-card/current-daycare-card.component';
import { UserBoardingState } from '../../shared/store/states/user-boarding.state';

@NgModule({
    declarations: [HomeComponent, CurrentDaycareCard],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: HomeComponent }]),
        AppCommonModule,
        SharedComponentsModule,
        NgxsModule.forFeature([UserBoardingState]),
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
