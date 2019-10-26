import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, PreloadAllModules } from "@angular/router";

import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    { path: "", redirectTo: "/pages/booking", pathMatch: "full" },
    {
        path: "auth",
        loadChildren: () => import("~/app/auth/auth.module").then(m => m.AuthModule)
    },
    {
        path: "pages",
        loadChildren: () =>
            import("~/app/pages/pages.module").then(m => m.PagesModule),
        //canLoad: [AuthGuard]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: false })],
    exports: [NativeScriptRouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
