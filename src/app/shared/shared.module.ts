import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptMaterialTextFieldModule } from 'nativescript-material-textfield/angular';
import { NativeScriptMaterialButtonModule } from 'nativescript-material-button/angular';
import { NativeScriptMaterialCardViewModule } from 'nativescript-material-cardview/angular';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { TNSImageModule } from 'nativescript-image/angular';
import { DogAvatarComponent } from './components/dog-avatar/dog-avatar.component';

@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    declarations: [ActionBarComponent, DogAvatarComponent],
    exports: [
        ActionBarComponent,
        NativeScriptMaterialTextFieldModule,
        NativeScriptMaterialButtonModule,
        NativeScriptMaterialCardViewModule,
        TNSImageModule,
        DogAvatarComponent,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
