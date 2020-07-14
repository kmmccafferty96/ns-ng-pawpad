import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('~/app/auth/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'register',
        loadChildren: () => import('~/app/auth/register/register.module').then((m) => m.RegisterModule),
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class AuthRoutingModule {}
