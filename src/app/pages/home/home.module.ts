import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: HomeComponent }]),
        SharedModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
