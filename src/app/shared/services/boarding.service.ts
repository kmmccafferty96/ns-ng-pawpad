import { Injectable, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { action } from 'tns-core-modules/ui/dialogs/dialogs';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as moment from 'moment';

import { DialogService } from './dialog.service';
import { PageURL } from '../helpers/enums/page-url.enum';
import { Boarding } from '../models/boarding.model';
import { HttpStatusInterceptor } from './http-status-interceptor.service';
import { AuthService } from '../../auth/auth.service';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class BoardingService implements OnDestroy {
    simulatedDelay = 600;

    private _loggedInUserSub: Subscription;
    loggedInUser: User;

    private _loggedInUserBoardingsSub$ = new BehaviorSubject<Boarding[]>(undefined);
    loggedInUserBoardings$ = this._loggedInUserBoardingsSub$.asObservable().pipe();

    constructor(
        private _router: RouterExtensions,
        private _dialogService: DialogService,
        private _httpStatusInterceptor: HttpStatusInterceptor,
        private _authService: AuthService
    ) {
        this._loggedInUserSub = this._authService.user.subscribe((user) => {
            this.loggedInUser = user;
            this.setLoggedInUserBoardings();
        });
    }

    setLoggedInUserBoardings(): void {
        if (!this.loggedInUser) {
            this._loggedInUserBoardingsSub$.next(undefined);
            return;
        }

        // Emit mock data
        this._httpStatusInterceptor.changeStatus(true, 'GET');
        setTimeout(() => {
            this._loggedInUserBoardingsSub$.next(this.getUserBoardings(this.loggedInUser));
            this._httpStatusInterceptor.changeStatus(false, 'GET');
        }, this.simulatedDelay);
    }

    getUserBoardings(user: User): Boarding[] {
        if (!user) {
            throw Error('No user was specified.');
        }

        // TODO (HTTP) - get user boardings
        return [
            {
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
                endDate: moment(new Date('Wed Apr 1 2020')),
            },
            {
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
                startDate: moment(new Date('Sun Apr 5 2020')),
                endDate: moment(new Date('Wed Apr 8 2020')),
            },
        ];
    }

    async showBoardingActionsAsync(boarding: Boarding) {
        const response = await action({
            title: `Boarding scheduled from ${boarding.startDate.format('MM/DD/YYYY')} to ${boarding.endDate.format(
                'MM/DD/YYYY'
            )}`,
            cancelButtonText: 'Close',
            actions: ['Edit Boarding', 'Cancel Boarding'],
        });

        switch (response) {
            case 'Edit Boarding': {
                this._router.navigate([`/pages/${PageURL.Boarding}/edit`, '55'], {
                    transition: { name: 'slide' },
                });
                break;
            }
            case 'Cancel Boarding': {
                await this.cancelBoardingAsync(boarding, true);
            }
        }
    }

    async cancelBoardingAsync(boarding: Boarding, confirm?: boolean) {
        if (confirm) {
            if (!(await this.confirmCancelAsync(boarding))) {
                return;
            }
        }

        //TODO - cancel boarding
    }

    private async confirmCancelAsync(boarding: Boarding) {
        return await this._dialogService.showConfirm({
            title: 'Cancel Boarding?',
            message: `Are you sure you want to cancel your boarding scheduled from ${boarding.startDate.format(
                'MM/DD/YYYY'
            )} to ${boarding.endDate.format('MM/DD/YYYY')}?`,
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
