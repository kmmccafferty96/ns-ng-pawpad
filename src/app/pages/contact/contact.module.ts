import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { AppCommonModule } from '../../shared/app-common.module';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [ContactComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: ContactComponent }]),
        AppCommonModule,
        SharedComponentsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ContactModule {}
