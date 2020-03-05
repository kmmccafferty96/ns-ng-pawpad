import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        NativeScriptRouterModule.forChild([{ path: '', component: RegisterComponent }]),
        SharedModule,
        NativeScriptCommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class RegisterModule {}
