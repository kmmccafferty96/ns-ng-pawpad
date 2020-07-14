import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { BoardingComponent } from './boarding.component';
import { EditBoardingComponent } from './edit-boarding/edit-boarding.component';

const routes: Routes = [
    { path: 'new', component: EditBoardingComponent, pathMatch: 'full' },
    { path: 'edit/:id', component: EditBoardingComponent, pathMatch: 'full' },
    { path: '', component: BoardingComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class BoardingRoutingModule {}
