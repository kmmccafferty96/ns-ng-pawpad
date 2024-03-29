import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, Select } from '@ngxs/store';

import { BoardingService } from '../../shared/services/boarding.service';
import { UserBoardingState } from '../../shared/store/states/user-boarding.state';
import { Boarding } from '../../shared/models/boarding.model';
import { UserBoardingActions } from '../../shared/store/actions/user-boarding.actions';
import { DaycareService } from '../../shared/services/daycare.service';
import { Daycare } from '../../shared/models/daycare.model';
import { UserDaycareState } from '../../shared/store/states/user-daycare.state';
import { UserDaycareActions } from '../../shared/store/actions/user-daycare.actions';

/** Sandbox (Facade) Service for the HomeModule. */
@Injectable({ providedIn: 'root' })
export class HomeFacadeService implements OnDestroy {
    private _subscriptions = new Subscription();

    @Select(UserBoardingState.getUserBoardings) userBoardings$: Observable<Boarding[]>;
    @Select(UserDaycareState.getUserDaycare) userDaycare$: Observable<Daycare>;

    constructor(
        private _store: Store,
        private _daycareService: DaycareService,
        private _boardingService: BoardingService
    ) {}

    // #region DaycareService abstractions

    toggleDaycarePickupStatus(daycareId: string): void {
        this._subscriptions.add(
            this._daycareService.togglePickupStatus(daycareId).subscribe((daycare) => {
                let prevValue = false;
                this._subscriptions.add(this.userDaycare$.subscribe((d) => (prevValue = d.pickupStatus)));
                this._store.dispatch(new UserDaycareActions.SetPickupStatus(!prevValue));
            })
        );
    }

    // #endregion

    // #region BoardingService abstractions

    cancelBoarding(boardingId: string): void {
        this._subscriptions.add(
            this._boardingService.cancelBoarding(boardingId).subscribe(() => {
                this._store.dispatch(new UserBoardingActions.CancelFromHome(boardingId));
            })
        );
    }

    // #endregion

    ngOnDestroy(): void {
        if (this._subscriptions) {
            this._subscriptions.unsubscribe();
        }
    }
}
