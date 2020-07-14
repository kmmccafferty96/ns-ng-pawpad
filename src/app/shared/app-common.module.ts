import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativeScriptMaterialTextFieldModule } from 'nativescript-material-textfield/angular';
import { NativeScriptMaterialButtonModule } from 'nativescript-material-button/angular';
import { NativeScriptMaterialCardViewModule } from 'nativescript-material-cardview/angular';
import { TNSImageModule } from 'nativescript-image/angular';

import { ActionBarComponent } from './components/action-bar/action-bar.component';

@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    declarations: [ActionBarComponent],
    exports: [
        ActionBarComponent,
        NativeScriptMaterialTextFieldModule,
        NativeScriptMaterialButtonModule,
        NativeScriptMaterialCardViewModule,
        TNSImageModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppCommonModule {}
