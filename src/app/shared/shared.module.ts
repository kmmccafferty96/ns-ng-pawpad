import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptMaterialTextFieldModule } from "nativescript-material-textfield/angular";
import { NativeScriptMaterialButtonModule } from "nativescript-material-button/angular";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { DatePickerComponent } from './ui/date-picker/date-picker.component';
import { ActionBarComponent } from "./ui/action-bar/action-bar.component";

@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptDateTimePickerModule],
    declarations: [ActionBarComponent, DatePickerComponent],
    exports: [
        ActionBarComponent,
        NativeScriptMaterialTextFieldModule,
        NativeScriptMaterialButtonModule,
        DatePickerComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
