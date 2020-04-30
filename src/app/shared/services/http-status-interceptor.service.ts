import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, NEVER, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';

import { HttpStatusService } from './http-status.service';

@Injectable({ providedIn: 'root' })
export class HttpStatusInterceptor implements HttpInterceptor {
    private loadingCalls = 0;
    private actingCalls = 0;

    constructor(private httpStatusService: HttpStatusService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.changeStatus(true, req.method);

        return next.handle(req.clone()).pipe(
            catchError((e) => {
                if (e.status === 400) {
                    this.httpStatusService.validationErrors = e.error.validationErrors;

                    return NEVER;
                }

                return throwError(e);
            }),
            finalize(() => {
                this.changeStatus(false, req.method);
            })
        );
    }

    // TODO - make this private again after mock data has been removed
    changeStatus(v: boolean, method: string): void {
        if (['POST', 'PUT', 'DELETE', 'PATCH'].indexOf(method) > -1) {
            v ? this.actingCalls++ : this.actingCalls--;
            this.httpStatusService.acting = this.actingCalls > 0;
        } else if (method === 'GET') {
            v ? this.loadingCalls++ : this.loadingCalls--;
            this.httpStatusService.loading = this.loadingCalls > 0;
        }
    }
}
