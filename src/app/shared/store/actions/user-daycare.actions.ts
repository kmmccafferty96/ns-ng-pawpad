import { Daycare } from '../../models/daycare.model';
export namespace UserDaycare {
    export class Initialize {
        static readonly type = '[Home] InitializeUserDaycare';
        constructor(public daycare: Daycare) {}
    }

    export class SetPickupStatus {
        static readonly type = '[Home] SetPickupStatus';
        constructor(public status: boolean) {}
    }
}
