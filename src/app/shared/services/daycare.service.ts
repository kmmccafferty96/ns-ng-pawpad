import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Moment } from 'moment';
import * as moment from 'moment';

import { DialogService } from './dialog.service';
import { SnackBarService } from './snackbar.service';
import { Daycare } from '../models/daycare.interface';
import { HttpStatusInterceptor } from './http-status-interceptor.service';

@Injectable({ providedIn: 'root' })
export class DaycareService {
    simulatedDelay = 600;

    private _currentDaycareSub$ = new BehaviorSubject<Daycare>(null);
    private _pickupStatusSub$ = new BehaviorSubject<boolean>(null);

    currentDaycare$ = this._currentDaycareSub$.asObservable().pipe();

    pickupStatus$ = this._pickupStatusSub$.asObservable().pipe();

    constructor(
        private _httpStatusInterceptor: HttpStatusInterceptor,
        private _dialogService: DialogService,
        private _snackBarService: SnackBarService
    ) {}

    getCurrentDaycare() {
        // TODO (HTTP) - get current daycare

        // Emit mock data
        this._httpStatusInterceptor.changeStatus(true, 'GET');
        setTimeout(() => {
            this._currentDaycareSub$.next({
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
                startDate: moment('Sun Mar 29 2020'),
            });
            this._httpStatusInterceptor.changeStatus(false, 'GET');
        }, this.simulatedDelay);
    }

    getPickupStatus() {
        // TODO (HTTP) - get user pickup status

        // Emit mock data
        this._httpStatusInterceptor.changeStatus(true, 'GET');
        setTimeout(() => {
            this._pickupStatusSub$.next(false);
            this._httpStatusInterceptor.changeStatus(false, 'GET');
        }, this.simulatedDelay);
    }

    /** Toggles the pickup status - whether the owner is on the way to pick up dog(s) or not */
    async togglePickupStatusAsync() {
        if (this._pickupStatusSub$.value) {
            // Ask user to confirm cancelling their pickup
            if (!(await this.confirmCancelAsync())) {
                return;
            }
        }

        // TODO (HTTP) - set pickup status
        this._httpStatusInterceptor.changeStatus(true, 'GET');
        setTimeout(() => {
            this._pickupStatusSub$.next(!this._pickupStatusSub$.value);
            this._httpStatusInterceptor.changeStatus(false, 'GET');

            if (this._pickupStatusSub$.value) {
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
}
