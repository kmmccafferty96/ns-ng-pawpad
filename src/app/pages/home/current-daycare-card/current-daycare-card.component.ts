import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Daycare } from '../../../shared/models/daycare.interface';
import { DaycareService } from '../../../shared/services/daycare.service';

/** Component that displays a current daycare card */
@Component({
    selector: 'ns-current-daycare-card',
    templateUrl: './current-daycare-card.component.html',
    styleUrls: ['./current-daycare-card.component.scss'],
})
export class CurrentDaycareCard implements OnDestroy {
    private _currentDaycareSub: Subscription;
    private _pickupStatusSub: Subscription;

    currentDaycare: Daycare = undefined;
    pickupStatus = false;

    constructor(private _daycareService: DaycareService) {
        // Get the initial values for daycare and pickup status
        this._daycareService.getCurrentDaycare();
        this._daycareService.getPickupStatus();

        this._currentDaycareSub = this._daycareService.currentDaycare$.subscribe((val) => {
            this.currentDaycare = val;
        });

        this._pickupStatusSub = this._daycareService.pickupStatus$.subscribe((val) => {
            this.pickupStatus = val;
        });
    }

    togglePickupStatus() {
        this._daycareService.togglePickupStatusAsync();
    }

    ngOnDestroy() {
        if (this._currentDaycareSub) {
            this._currentDaycareSub.unsubscribe();
        }
        if (this._pickupStatusSub) {
            this._pickupStatusSub.unsubscribe();
        }
    }
}
