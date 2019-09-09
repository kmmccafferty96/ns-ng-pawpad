import { NgModule } from "@angular/core";

import { ActionBarComponent } from "./ui/action-bar/action-bar.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptMaterialTextFieldModule } from "nativescript-material-textfield/angular";
import { NativeScriptMaterialButtonModule } from "nativescript-material-button/angular";

@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    declarations: [ActionBarComponent],
    exports: [
        ActionBarComponent,
        NativeScriptMaterialTextFieldModule,
        NativeScriptMaterialButtonModule
    ]
})
export class SharedModule {}
