import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

import { PageBase } from '../../shared/classes/page-base';

@Component({
    selector: 'ns-our-services',
    templateUrl: './our-services.component.html',
    styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent extends PageBase {
    constructor(page: Page) {
        super(page);
    }
}
