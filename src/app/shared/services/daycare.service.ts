import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Moment } from 'moment';
import * as moment from 'moment';

import { DialogService } from './dialog.service';
import { SnackBarService } from './snackbar.service';
import { Daycare } from '../models/daycare.interface';
import { HttpStatusInterceptor } from './http-status-interceptor.service';
import { AuthService } from '../../auth/auth.service';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class DaycareService implements OnDestroy {
    simulatedDelay = 600;

    private _loggedInUserSub: Subscription;
    loggedInUser: User;

    private _loggedInUserCurrentDaycareSub$ = new BehaviorSubject<Daycare>(undefined);
    loggedInUserCurrentDaycare$ = this._loggedInUserCurrentDaycareSub$.asObservable().pipe();

    constructor(
        private _httpStatusInterceptor: HttpStatusInterceptor,
        private _dialogService: DialogService,
        private _snackBarService: SnackBarService,
        private _authService: AuthService
    ) {
        this._loggedInUserSub = this._authService.user.subscribe((user) => {
            console.log('USER S: ' + user);
            this.loggedInUser = user;
            this.setLoggedInUserCurrentDaycare();
        });
    }

    setLoggedInUserCurrentDaycare(): void {
        if (!this.loggedInUser) {
            this._loggedInUserCurrentDaycareSub$.next(undefined);
            return;
        }

        // Emit mock data
        this._httpStatusInterceptor.changeStatus(true, 'GET');
        setTimeout(() => {
            this._loggedInUserCurrentDaycareSub$.next(this.getUserCurrentDaycare(this.loggedInUser));
            this._httpStatusInterceptor.changeStatus(false, 'GET');
        }, this.simulatedDelay);
    }

    getUserCurrentDaycare(user: User): Daycare {
        if (!user) {
            throw Error('No user was specified.');
        }

        // TODO (HTTP) - get user current daycare
        return {
            userId: '',
            dogs: [
                {
                    id: '',
                    name: 'Bailey',
                    imageUrl:
                        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg?crop=0.747xw:1.00xh;0.0459xw,0&resize=480:*',
                },
                {
                    id: '',
                    name: 'Berkeley',
                    imageUrl:
                        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-laying-on-grass-high-res-stock-photography-1574096636.jpg?crop=0.722xw:1.00xh;0.140xw,0&resize=640:*',
                },
            ],
            startDate: moment(new Date('Sun Mar 29 2020')),
            pickupStatus: false,
        };
    }

    /** Toggles the pickup status - whether the owner is on the way to pick up dog(s) or not */
    async toggleLoggedInUserPickupStatusAsync() {
        if (!this.loggedInUser) {
            throw Error('No user is logged in.');
        }

        if (this._loggedInUserCurrentDaycareSub$.value.pickupStatus) {
            // Ask user to confirm cancelling their pickup
            if (!(await this.confirmCancelAsync())) {
                return;
            }
        }

        // TODO (HTTP) - set pickup status
        this._httpStatusInterceptor.changeStatus(true, 'GET');
        setTimeout(() => {
            this._loggedInUserCurrentDaycareSub$.value.pickupStatus = !this._loggedInUserCurrentDaycareSub$.value
                .pickupStatus;
            this._loggedInUserCurrentDaycareSub$.next(this._loggedInUserCurrentDaycareSub$.value);
            this._httpStatusInterceptor.changeStatus(false, 'GET');

            if (this._loggedInUserCurrentDaycareSub$.value.pickupStatus) {
                this._snackBarService.showSimpleSnackBar('We have been notified that you are on your way!');
            }
        }, this.simulatedDelay);
    }

    private async confirmCancelAsync() {
        return await this._dialogService.showConfirm({
            title: 'Cancel Pickup?',
            message:
                'Are you sure you want to cancel your pickup? This status is used to let us know when you are on your way to pickup your dog(s).',
            okButtonText: 'Yes, cancel',
            cancelButtonText: 'No',
        });
    }

    ngOnDestroy(): void {
        if (this._loggedInUserSub) {
            this._loggedInUserSub.unsubscribe();
        }
    }
}
