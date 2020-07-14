import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { OurServicesComponent } from './our-services.component';

@NgModule({
    declarations: [OurServicesComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: OurServicesComponent }]),
        AppCommonModule,
        SharedComponentsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class OurServicesModule {}
