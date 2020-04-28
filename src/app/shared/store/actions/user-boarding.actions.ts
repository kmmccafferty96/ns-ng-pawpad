import { Boarding } from '../../models/boarding.model';
export namespace UserBoarding {
    export class InitializeFromHome {
        static readonly type = '[Home] InitializeUserBoardings';
        constructor(public boardings: Boarding[]) {}
    }

    export class InitializeFromBoarding {
        static readonly type = '[Boarding] InitializeUserBoardings';
        constructor(public boardings: Boarding[]) {}
    }
}
