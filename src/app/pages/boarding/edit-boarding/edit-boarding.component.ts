import { Component } from '@angular/core';
import { Page } from '@nativescript/core/ui/page/page';

import { PageBase } from '../../../shared/classes/page-base';

@Component({
    selector: 'ns-edit-boarding',
    templateUrl: './edit-boarding.component.html',
    styleUrls: ['./edit-boarding.component.scss'],
})
export class EditBoardingComponent extends PageBase {
    constructor(page: Page) {
        super(page);
    }
}
