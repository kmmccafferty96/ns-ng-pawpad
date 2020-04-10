import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { DogAvatarComponent } from './components/dog-avatar/dog-avatar.component';
import { BoardingList } from './components/boarding-list/boarding-list.component';
import { BoardingCard } from './components/boarding-list/boarding-card/boarding-card.component';

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [DogAvatarComponent, BoardingList, BoardingCard],
    exports: [DogAvatarComponent, BoardingList, BoardingCard],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedComponentsModule {}
