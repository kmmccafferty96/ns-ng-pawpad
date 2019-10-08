import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        PagesRoutingModule,
        NativeScriptUISideDrawerModule,
        SharedModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
  })
export class PagesModule {}
