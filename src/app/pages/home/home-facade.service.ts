import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
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
export class HomeFacadeService {
    @Select(UserBoardingState.getUserBoardings) userBoardings$: Observable<Boarding[]>;
    @Select(UserDaycareState.getUserDaycare) userDaycare$: Observable<Daycare>;

    constructor(
        private _store: Store,
        private _daycareService: DaycareService,
        private _boardingService: BoardingService
    ) {}

    // #region DaycareService abstractions

    toggleDaycarePickupStatus(daycareId: string): void {
        this._daycareService
            .togglePickupStatus(daycareId)
            .pipe(take(1))
            .subscribe((daycare) => {
                let prevValue = false;
                this.userDaycare$.pipe(take(1)).subscribe((d) => (prevValue = d.pickupStatus));
                this._store.dispatch(new UserDaycareActions.SetPickupStatus(!prevValue));
            });
    }

    // #endregion

    // #region BoardingService abstractions

    cancelBoarding(boardingId: string): void {
        this._boardingService
            .cancelBoarding(boardingId)
            .pipe(take(1))
            .subscribe(() => {
                this._store.dispatch(new UserBoardingActions.CancelFromHome(boardingId));
            });
    }

    // #endregion
}
