import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './register.component';

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
