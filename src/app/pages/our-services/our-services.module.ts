import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { OurServicesComponent } from "./our-services.component";

@NgModule({
    declarations: [OurServicesComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: OurServicesComponent }
        ])
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class OurServicesModule {}
