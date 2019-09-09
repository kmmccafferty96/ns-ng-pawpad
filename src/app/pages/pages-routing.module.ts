import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: "",
        component: PagesComponent,
        children: [
            {
                path: "home",
                loadChildren: () =>
                    import("./home/home.module").then(
                        m => m.HomeModule
                    )
            },
            {
                path: "booking",
                loadChildren: () =>
                    import("./booking/booking.module").then(
                        m => m.BookingModule
                    )
            },
            {
                path: "camera",
                loadChildren: () =>
                    import("./camera/camera.module").then(m => m.CameraModule)
            },
            {
                path: "contact",
                loadChildren: () =>
                    import("./contact/contact.module").then(
                        m => m.ContactModule
                    )
            },
            {
                path: "our-services",
                loadChildren: () =>
                    import("./our-services/our-services.module").then(
                        m => m.OurServicesModule
                    )
            },
            { path: "**", redirectTo: "/pages/home", pathMatch: "full" }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PagesRoutingModule {}
