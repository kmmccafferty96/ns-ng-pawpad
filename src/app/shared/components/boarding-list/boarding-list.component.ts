import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BoardingService } from '../../services/boarding.service';
import { Boarding } from '../../models/boarding.model';

/** Component that displays upcoming boarding in a list */
@Component({
    selector: 'ns-boarding-list',
    templateUrl: './boarding-list.component.html',
    styleUrls: ['./boarding-list.component.scss'],
})
export class BoardingList implements OnDestroy {
    private _boardingsSub: Subscription;

    /** Array of boardings to be displayed in a list */
    boardings: Boarding[];

    constructor(private _boardingService: BoardingService) {
        this._boardingsSub = this._boardingService.loggedInUserBoardings$.subscribe((boardings) => {
            this.boardings = boardings;
        });
    }

    ngOnDestroy() {
        if (this._boardingsSub) {
            this._boardingsSub.unsubscribe();
        }
    }
}
