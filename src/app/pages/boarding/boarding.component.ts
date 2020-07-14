import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

import { PageBase } from '../../shared/classes/page-base';
import { BoardingFacadeService } from './boarding-facade.service';
import { Boarding } from '../../shared/models/boarding.model';

/** Component for the main boarding page. */
@Component({
    selector: 'ns-boarding',
    templateUrl: './boarding.component.html',
    styleUrls: ['./boarding.component.scss'],
})
export class BoardingComponent extends PageBase {
    /** UserBoardings stream */
    boardings$ = this._facadeService.userBoardings$;

    constructor(page: Page, private _facadeService: BoardingFacadeService) {
        super(page);
    }

    onBoardingCancel(boarding: Boarding) {
        this._facadeService.cancelBoarding(boarding.id);
    }
}
