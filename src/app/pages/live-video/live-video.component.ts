import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

import { PageBase } from '../../shared/classes/page-base';

@Component({
    selector: 'ns-live-video',
    templateUrl: './live-video.component.html',
    styleUrls: ['./live-video.component.css'],
})
export class LiveVideoComponent extends PageBase {
    constructor(page: Page) {
        super(page);
    }
}
