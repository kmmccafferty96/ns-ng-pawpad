import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Boarding } from '../models/boarding.model';
import { HttpStatusInterceptor } from './http-status-interceptor.service';
import { boardings } from '../mock-data/boarding.data';

@Injectable({ providedIn: 'root' })
export class BoardingService {
    simulatedDelay = 600;

    constructor(private _httpStatusInterceptor: HttpStatusInterceptor) {}

    /**
     * Fetch user boardings from the api.
     * @param userId id of user to fetch boardings for.
     */
    fetchBoardings(userId: string): Observable<Boarding[]> {
        if (!userId) {
            throw new Error('No user id was specified.');
        }

        // TODO (HTTP) - fetch user boardings
        return of(boardings).pipe(
            tap(() => this._httpStatusInterceptor.changeStatus(true, 'GET')),
            delay(this.simulatedDelay),
            tap(() => this._httpStatusInterceptor.changeStatus(false, 'GET'))
        );
    }

    /**
     * Cancel a user boarding through the api.
     * @param id id of the boarding to cancel.
     */
    cancelBoarding(boardingId: string): Observable<Boarding> {
        if (!boardingId) {
            throw new Error('No boarding id was specified.');
        }

        // TODO (HTTP) - cancel user boarding
        return of(undefined).pipe(
            tap(() => this._httpStatusInterceptor.changeStatus(true, 'GET')),
            delay(this.simulatedDelay),
            tap(() => this._httpStatusInterceptor.changeStatus(false, 'GET'))
        );
    }
}
