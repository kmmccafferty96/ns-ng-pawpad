import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpStatusService {
    private validationErrorsSub$ = new Subject();
    private loadingSub$ = new ReplaySubject<boolean>(1);
    private actingSub$ = new ReplaySubject<boolean>(1);

    validationErrors$ = this.validationErrorsSub$.asObservable();
    loading$ = this.loadingSub$.pipe(distinctUntilChanged());
    acting$ = this.actingSub$.pipe(distinctUntilChanged());

    set validationErrors(errors: any[]) {
        this.validationErrorsSub$.next(errors);
    }

    set loading(val: boolean) {
        this.loadingSub$.next(val);
    }

    set acting(val: boolean) {
        this.actingSub$.next(val);
    }
}
