import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AuthComponent } from "./auth.component";

const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        children: [
            {
                path: "login",
                loadChildren: () =>
                    import("./login/login.module").then(
                        m => m.LoginModule
                    )
            },
            {
                path: "register",
                loadChildren: () =>
                    import("./register/register.module").then(
                        m => m.RegisterModule
                    )
            },
            { path: "", redirectTo: "/auth/login", pathMatch: "full" }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule {}
