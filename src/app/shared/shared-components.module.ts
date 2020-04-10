import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DogAvatarComponent } from './components/dog-avatar/dog-avatar.component';

@NgModule({
    declarations: [DogAvatarComponent],
    exports: [DogAvatarComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedComponentsModule {}
