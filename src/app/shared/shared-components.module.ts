import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular/common';

import { DogAvatarComponent } from './components/dog-avatar/dog-avatar.component';
import { BoardingListComponent } from './components/boarding-list/boarding-list.component';
import { BoardingCardComponent } from './components/boarding-list/boarding-card/boarding-card.component';

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [DogAvatarComponent, BoardingListComponent, BoardingCardComponent],
    exports: [DogAvatarComponent, BoardingListComponent, BoardingCardComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedComponentsModule {}
