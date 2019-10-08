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
                path: "",
                loadChildren: () =>
                    import("~/app/pages/home/home.module").then(
                        m => m.HomeModule
                    )
            },
            {
                path: "booking",
                loadChildren: () =>
                    import("~/app/pages/booking/booking.module").then(
                        m => m.BookingModule
                    )
            },
            {
                path: "camera",
                loadChildren: () =>
                    import("~/app/pages/camera/camera.module").then(m => m.CameraModule)
            },
            {
                path: "contact",
                loadChildren: () =>
                    import("~/app/pages/contact/contact.module").then(
                        m => m.ContactModule
                    )
            },
            {
                path: "our-services",
                loadChildren: () =>
                    import("~/app/pages/our-services/our-services.module").then(
                        m => m.OurServicesModule
                    )
            },
            //{ path: "**", redirectTo: "/pages/home", pathMatch: "full" }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PagesRoutingModule {}
