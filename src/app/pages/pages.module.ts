import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { NativeScriptMaterialBottomNavigationBarModule } from 'nativescript-material-bottomnavigationbar/angular';
import { NativeScriptMaterialActivityIndicatorModule } from 'nativescript-material-activityindicator/angular';

import { AppCommonModule } from '../shared/app-common.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [PagesComponent],
    imports: [
        PagesRoutingModule,
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptMaterialBottomNavigationBarModule,
        NativeScriptMaterialActivityIndicatorModule,
        AppCommonModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class PagesModule {}
