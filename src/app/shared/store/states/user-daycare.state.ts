import { Injectable } from '@angular/core';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { produce } from 'immer';

import { Daycare } from '../../models/daycare.model';
import { UserDaycareActions } from '../actions/user-daycare.actions';

export interface UserDaycareStateModel {
    daycare: Daycare;
}

@State<UserDaycareStateModel>({
    name: 'userDaycare',
    defaults: {
        daycare: undefined,
    },
})
@Injectable()
export class UserDaycareState {
    @Selector()
    static getUserDaycare(state: UserDaycareStateModel): Daycare {
        return state.daycare;
    }

    /**
     * Sets the user daycare.
     * @param ctx
     * @param action
     */
    @Action(UserDaycareActions.Initialize)
    initializeUserDaycare(ctx: StateContext<UserDaycareStateModel>, action: UserDaycareActions.Initialize) {
        ctx.setState(
            produce((draft: UserDaycareStateModel) => {
                draft.daycare = action.daycare;
            })
        );
    }

    /**
     * Sets the user daycare pickup status to the passed in boolean.
     * True means the user is actively picking up their dog, false means they're not.
     * @param ctx
     * @param action
     */
    @Action(UserDaycareActions.SetPickupStatus)
    setPickupStatus(ctx: StateContext<UserDaycareStateModel>, action: UserDaycareActions.SetPickupStatus) {
        ctx.setState(
            produce((draft: UserDaycareStateModel) => {
                draft.daycare.pickupStatus = action.status;
            })
        );
    }
}
