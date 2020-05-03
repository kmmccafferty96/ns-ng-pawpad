import { Boarding } from '../../models/boarding.model';
export namespace UserBoardingActions {
    // #region Initialize

    export class Initialize {
        static readonly type = '[Pages] InitializeUserBoardings';
        constructor(public boardings: Boarding[]) {}
    }

    // #endregion

    // #region Cancel

    export class CancelFromHome {
        static readonly type = '[Home] CancelUserBoardings';
        constructor(public id: string) {}
    }

    export class CancelFromBoarding {
        static readonly type = '[Boarding] CancelUserBoardings';
        constructor(public id: string) {}
    }

    //#endregion
}
