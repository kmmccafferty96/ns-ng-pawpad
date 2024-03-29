import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { LiveVideoComponent } from './live-video.component';

@NgModule({
    declarations: [LiveVideoComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: LiveVideoComponent }]),
        AppCommonModule,
        SharedComponentsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class LiveVideoModule {}
