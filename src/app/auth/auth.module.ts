import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        AuthRoutingModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
  })
export class AuthModule {}
