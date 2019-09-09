import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BookingComponent } from "./booking.component";

@NgModule({
    declarations: [BookingComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([
            { path: '', component: BookingComponent }
        ])
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class BookingModule {}
