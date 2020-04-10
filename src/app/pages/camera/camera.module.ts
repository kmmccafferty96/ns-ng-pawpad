import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { CameraComponent } from './camera.component';

@NgModule({
    declarations: [CameraComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: CameraComponent }]),
        AppCommonModule,
        SharedComponentsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class CameraModule {}
