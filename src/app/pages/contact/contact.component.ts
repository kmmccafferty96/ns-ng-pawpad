import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

import { PageBase } from '../../shared/classes/page-base';

@Component({
    selector: 'ns-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent extends PageBase {
    constructor(page: Page) {
        super(page);
    }
}
