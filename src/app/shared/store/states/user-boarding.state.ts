import { Injectable } from '@angular/core';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { produce } from 'immer';

import { Boarding } from '../../models/boarding.model';
import { UserBoardingActions } from '../actions/user-boarding.actions';
import { arrayToObject } from '../../classes/utilities';

export interface UserBoardingStateModel {
    boardings: {
        [id: string]: Boarding;
    };
}

@State<UserBoardingStateModel>({
    name: 'userBoardings',
    defaults: {
        boardings: {},
    },
})
@Injectable()
export class UserBoardingState {
    @Selector()
    static getUserBoardings(state: UserBoardingStateModel): Boarding[] {
        return Object.values(state.boardings);
    }

    /**
     * Sets the user boardings to the passed in Boarding array.
     * @param ctx
     * @param action
     */
    @Action(UserBoardingActions.Initialize)
    initializeUserBoardings(ctx: StateContext<UserBoardingStateModel>, action: UserBoardingActions.Initialize) {
        ctx.setState(
            produce((draft: UserBoardingStateModel) => {
                draft.boardings = arrayToObject(action.boardings, 'id') || {};
            })
        );
    }

    /**
     * Cancels (deletes from store) a boarding based on the passed in id.
     * @param ctx
     * @param action
     */
    @Action(UserBoardingActions.CancelFromHome)
    @Action(UserBoardingActions.CancelFromBoarding)
    cancelUserBoarding(
        ctx: StateContext<UserBoardingStateModel>,
        action: UserBoardingActions.CancelFromHome | UserBoardingActions.CancelFromBoarding
    ) {
        ctx.setState(
            produce((draft: UserBoardingStateModel) => {
                delete draft.boardings[action.id];
            })
        );
    }
}
