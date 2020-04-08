import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { CurrentDaycareCard } from './current-daycare-card/current-daycare-card.component';
import { BoardingList } from './boarding-list/boarding-list.component';
import { BoardingCard } from './boarding-list/boarding-card/boarding-card.component';

@NgModule({
    declarations: [HomeComponent, CurrentDaycareCard, BoardingList, BoardingCard],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: HomeComponent }]),
        SharedModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
