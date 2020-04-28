import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

import { PageBase } from '../../shared/classes/page-base';
import { HomeFacadeService } from './home-facade.service';
import { Boarding } from '../../shared/models/boarding.model';

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends PageBase {
    /** UserBoardings stream */
    boardings$ = this._facadeService.userBoardings$;

    constructor(page: Page, private _facadeService: HomeFacadeService) {
        super(page);
        this._facadeService.fetchBoardings();
    }

    onBoardingCancel(boarding: Boarding) {
        this._facadeService.cancelBoarding(boarding.id);
    }
}
