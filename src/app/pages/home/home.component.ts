import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

import { PageBase } from '../../shared/classes/page-base';
import { HomeFacadeService } from './home-facade.service';

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
}
