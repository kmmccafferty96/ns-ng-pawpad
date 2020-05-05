import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';

import { User } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';
import { DaycareService } from '../shared/services/daycare.service';
import { BoardingService } from '../shared/services/boarding.service';
import { UserDaycareActions } from '../shared/store/actions/user-daycare.actions';
import { UserBoardingActions } from '../shared/store/actions/user-boarding.actions';
import { ActivityStatusState } from '../shared/store/states/activity-status.state';

/** Sandbox (Facade) Service for the PagesModule. */
@Injectable({ providedIn: 'root' })
export class PagesFacadeService implements OnDestroy {
    private _subscriptions = new Subscription();

    @Select(ActivityStatusState.getLoadingStatus) loading$: Observable<boolean>;

    // User that is logged in. This is set by the user observable from the authService.
    loggedInUser: User;

    constructor(
        private _store: Store,
        private _authService: AuthService,
        private _daycareService: DaycareService,
        private _boardingService: BoardingService
    ) {
        // Subscribe to logged in user changes
        this._subscriptions.add(
            this._authService.user.subscribe((user) => {
                this.loggedInUser = user;
            })
        );
    }

    // #region AuthService abstractions

    logout(): void {
        this._authService.logout();
    }

    // #endregion

    // #region DaycareService abstractions

    fetchDaycare(): void {
        this._daycareService
            .fetchDaycare(this.loggedInUser.id)
            .pipe(take(1))
            .subscribe((daycare) => {
                this._store.dispatch(new UserDaycareActions.Initialize(daycare));
            });
    }

    // #endregion

    // #region BoardingService abstractions

    fetchBoardings(): void {
        this._boardingService
            .fetchBoardings(this.loggedInUser.id)
            .pipe(take(1))
            .subscribe((boardings) => {
                this._store.dispatch(new UserBoardingActions.Initialize(boardings));
            });
    }

    // #endregion

    ngOnDestroy(): void {
        if (this._subscriptions) {
            this._subscriptions.unsubscribe();
        }
    }
}
