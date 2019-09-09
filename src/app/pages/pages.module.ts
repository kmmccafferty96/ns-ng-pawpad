import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        PagesRoutingModule,
        NativeScriptUISideDrawerModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
  })
export class PagesModule {}
