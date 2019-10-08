import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { OurServicesComponent } from "./our-services.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
    declarations: [OurServicesComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: OurServicesComponent }
        ]),
        SharedModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class OurServicesModule {}
