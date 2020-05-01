import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptMaterialBottomSheetModule } from 'nativescript-material-bottomsheet/angular';
import { themer } from 'nativescript-material-core';
import { NgxsModule, Store } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationErrorsStatusService } from './shared/services/validation-errors-status.service';
import { HttpStatusInterceptor } from './shared/services/http-status-interceptor.service';
import { ngxsConfig } from '../../ngxs.config';
import { ActivityStatusState } from './shared/store/states/activity-status.state';

import * as imageModule from 'nativescript-image';
import * as applicationModule from 'tns-core-modules/application';

// Needed for nativescript-image to work on Android
if (applicationModule.android) {
    applicationModule.on(applicationModule.launchEvent, () => {
        imageModule.initialize();
    });
}

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptMaterialBottomSheetModule.forRoot(),
        NgxsModule.forRoot([ActivityStatusState], ngxsConfig),
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            deps: [ValidationErrorsStatusService, Store],
            useClass: HttpStatusInterceptor,
        },
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
    constructor() {
        themer.setPrimaryColor('#B6A168');
    }
}
