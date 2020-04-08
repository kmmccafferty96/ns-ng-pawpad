import { NgModule, NO_ERRORS_SCHEMA, Injector } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpStatusService } from './shared/services/http-status.service';
import { HttpStatusInterceptor } from './shared/services/http-status-interceptor.service';
import { setRootInjector } from './shared/services/root-injector';

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
    imports: [NativeScriptModule, AppRoutingModule, NativeScriptHttpClientModule],
    declarations: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            deps: [HttpStatusService],
            useClass: HttpStatusInterceptor,
        },
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
    constructor(private injector: Injector) {
        setRootInjector(injector);
    }
}
