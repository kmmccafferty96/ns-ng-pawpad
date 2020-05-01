export namespace ActivityStatusActions {
    export class SetActingStatus {
        static readonly type = '[HTTP Status Interceptor] SetActingStatus';
        constructor(public status: boolean) {}
    }

    export class SetLoadingStatus {
        static readonly type = '[HTTP Status Interceptor] SetLoadingStatus';
        constructor(public status: boolean) {}
    }
}
