import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptMaterialTextFieldModule } from "nativescript-material-textfield/angular";
import { NativeScriptMaterialButtonModule } from "nativescript-material-button/angular";
import { ActionBarComponent } from "./ui/action-bar/action-bar.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ],
    declarations: [
        ActionBarComponent
    ],
    exports: [
        ActionBarComponent,
        NativeScriptMaterialTextFieldModule,
        NativeScriptMaterialButtonModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
