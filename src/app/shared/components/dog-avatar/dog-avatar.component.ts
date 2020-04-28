import { Component, Input } from '@angular/core';
import { Dog } from '../../models/dog.model';

/** Component for showing a dog avatar */
@Component({
    selector: 'ns-dog-avatar',
    templateUrl: './dog-avatar.component.html',
    styleUrls: ['./dog-avatar.component.scss'],
})
export class DogAvatarComponent {
    /** The dog object to display as an avatar */
    @Input() dog: Dog;

    /** The size (height and width) of the avatar */
    @Input() size = 50;
}
