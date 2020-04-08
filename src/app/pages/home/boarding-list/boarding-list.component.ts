import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BoardingService } from '../../../shared/services/boarding.service';
import { Boarding } from '../../../shared/models/boarding.interface';

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
        this._boardingService.getBoardings();

        this._boardingsSub = this._boardingService.boardings$.subscribe((val) => {
            this.boardings = val;
        });
    }

    ngOnDestroy() {
        if (this._boardingsSub) {
            this._boardingsSub.unsubscribe();
        }
    }
}
