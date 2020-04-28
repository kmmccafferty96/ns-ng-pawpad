import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';

import { User } from '../../shared/models/user.model';
import { AuthService } from '../../auth/auth.service';
import { BoardingService } from '../../shared/services/boarding.service';
import { UserBoardingState } from '../../shared/store/states/user-boarding.state';
import { Boarding } from '../../shared/models/boarding.model';
import { UserBoarding } from '../../shared/store/actions/user-boarding.actions';

/** Sandbox (Facade) Service for the HomeModule. */
@Injectable({ providedIn: 'root' })
export class HomeFacadeService implements OnDestroy {
    private _subscriptions = new Subscription();

    // User that is logged in. This is set by the user observable from the authService.
    loggedInUser: User;

    @Select(UserBoardingState.getUserBoardings) userBoardings$: Observable<Boarding[]>;

    constructor(private _store: Store, private _authService: AuthService, private _boardingService: BoardingService) {
        // Subscribe to logged in user changes
        this._subscriptions.add(
            this._authService.user.subscribe((user) => {
                this.loggedInUser = user;
            })
        );
    }

    // #region BoardingService abstractions

    fetchBoardings(): void {
        this._boardingService.fetchBoardings(this.loggedInUser.id).subscribe((boardings) => {
            this._store.dispatch(new UserBoarding.InitializeFromBoarding(boardings));
        });
    }

    cancelBoarding(boardingId: string): void {
        this._boardingService.cancelBoarding(boardingId).subscribe(() => {
            this._store.dispatch(new UserBoarding.CancelFromBoarding(boardingId));
        });
    }

    // #endregion

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }
}
