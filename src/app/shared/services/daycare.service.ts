import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { daycares } from '../mock-data/daycare.data';
import { HttpStatusInterceptor } from './http-status-interceptor.service';
import { Daycare } from '../models/daycare.model';

@Injectable({ providedIn: 'root' })
export class DaycareService {
    simulatedDelay = 600;

    constructor(private _httpStatusInterceptor: HttpStatusInterceptor) {}

    /**
     * Fetch user daycare from the api.
     * @param userId id of user to fetch boardings for.
     */
    fetchDaycare(userId: string): Observable<Daycare> {
        if (!userId) {
            throw new Error('No user id was specified.');
        }

        // TODO (HTTP) - fetch user daycare
        return of(daycares.find((d) => d.userId === '1')).pipe(
            tap(() => this._httpStatusInterceptor.changeStatus(true, 'GET')),
            delay(this.simulatedDelay),
            tap(() => this._httpStatusInterceptor.changeStatus(false, 'GET'))
        );
    }

    /**
     * Toggle the pickup status of the daycare with the passed in id.
     * @param daycareId id of the daycare to update the pickup status for.
     */
    togglePickupStatus(daycareId: string): Observable<Daycare> {
        if (!daycareId) {
            throw new Error('No daycare id was specified.');
        }

        // TODO (HTTP) - patch user daycare pickup status
        return of(undefined).pipe(
            tap(() => this._httpStatusInterceptor.changeStatus(true, 'GET')),
            delay(this.simulatedDelay),
            tap(() => this._httpStatusInterceptor.changeStatus(false, 'GET'))
        );
    }
}
