import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { PageURL } from '../shared/enums/page-url.enum';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: PageURL.Home,
                loadChildren: () => import('~/app/pages/home/home.module').then((m) => m.HomeModule),
            },
            {
                path: PageURL.Boarding,
                loadChildren: () => import('~/app/pages/boarding/boarding.module').then((m) => m.BoardingModule),
            },
            {
                path: PageURL.LiveVideo,
                loadChildren: () => import('~/app/pages/live-video/live-video.module').then((m) => m.LiveVideoModule),
            },
            {
                path: PageURL.Contact,
                loadChildren: () => import('~/app/pages/contact/contact.module').then((m) => m.ContactModule),
            },
            {
                path: PageURL.Services,
                loadChildren: () =>
                    import('~/app/pages/our-services/our-services.module').then((m) => m.OurServicesModule),
            },
            // { path: "**", redirectTo: "/pages/home", pathMatch: "full" }
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class PagesRoutingModule {}
