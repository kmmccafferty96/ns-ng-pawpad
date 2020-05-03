import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';

import { BoardingService } from '../../shared/services/boarding.service';
import { UserBoardingState } from '../../shared/store/states/user-boarding.state';
import { Boarding } from '../../shared/models/boarding.model';
import { UserBoardingActions } from '../../shared/store/actions/user-boarding.actions';

/** Sandbox (Facade) Service for the BoardingModule. */
@Injectable({ providedIn: 'root' })
export class BoardingFacadeService implements OnDestroy {
    private _subscriptions = new Subscription();

    @Select(UserBoardingState.getUserBoardings) userBoardings$: Observable<Boarding[]>;

    constructor(private _store: Store, private _boardingService: BoardingService) {}

    // #region BoardingService abstractions

    cancelBoarding(boardingId: string): void {
        this._boardingService.cancelBoarding(boardingId).subscribe(() => {
            this._store.dispatch(new UserBoardingActions.CancelFromBoarding(boardingId));
        });
    }

    // #endregion

    ngOnDestroy(): void {
        if (this._subscriptions) {
            this._subscriptions.unsubscribe();
        }
    }
}
