import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ContactComponent } from "./contact.component";

@NgModule({
    declarations: [ContactComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([
            { path: '', component: ContactComponent }
        ])
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ContactModule {}
