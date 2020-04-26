import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Daycare } from '../../../shared/models/daycare.model';
import { DaycareService } from '../../../shared/services/daycare.service';

/** Component that displays a current daycare card */
@Component({
    selector: 'ns-current-daycare-card',
    templateUrl: './current-daycare-card.component.html',
    styleUrls: ['./current-daycare-card.component.scss'],
})
export class CurrentDaycareCard implements OnDestroy {
    private _currentDaycareSub: Subscription;

    /** Current Daycare for the logged in user */
    currentDaycare: Daycare;

    constructor(private _daycareService: DaycareService) {
        this._currentDaycareSub = this._daycareService.loggedInUserCurrentDaycare$.subscribe((daycare) => {
            this.currentDaycare = daycare;
        });
    }

    togglePickupStatus() {
        this._daycareService.toggleLoggedInUserPickupStatusAsync();
    }

    ngOnDestroy() {
        if (this._currentDaycareSub) {
            this._currentDaycareSub.unsubscribe();
        }
    }
}
