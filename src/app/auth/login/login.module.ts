import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular/router';
import { NativeScriptCommonModule } from '@nativescript/angular/common';
import { NativeScriptFormsModule } from '@nativescript/angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppCommonModule } from '../../shared/app-common.module';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([{ path: '', component: LoginComponent }]),
        AppCommonModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule {}
