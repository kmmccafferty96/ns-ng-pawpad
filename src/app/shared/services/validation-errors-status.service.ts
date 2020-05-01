import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ValidationErrorsStatusService {
    private validationErrorsSub$ = new Subject();

    validationErrors$ = this.validationErrorsSub$.asObservable();

    set validationErrors(errors: any[]) {
        this.validationErrorsSub$.next(errors);
    }
}
