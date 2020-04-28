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

    fetchBoardings(userId: string): Observable<Boarding[]> {
        if (!userId) {
            throw Error('No user id was specified.');
        }

        // TODO (HTTP) - fetch user boardings
        return of(boardings).pipe(
            tap(() => this._httpStatusInterceptor.changeStatus(true, 'GET')),
            delay(this.simulatedDelay),
            tap(() => this._httpStatusInterceptor.changeStatus(false, 'GET'))
        );
    }
}
