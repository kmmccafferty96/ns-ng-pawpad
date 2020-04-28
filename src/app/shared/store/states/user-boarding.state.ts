import { Injectable } from '@angular/core';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { produce } from 'immer';

import { Boarding } from '../../models/boarding.model';
import { UserBoarding } from '../actions/user-boarding.actions';
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
    @Action(UserBoarding.InitializeFromHome)
    @Action(UserBoarding.InitializeFromBoarding)
    initializeUserBoardings(
        ctx: StateContext<UserBoardingStateModel>,
        action: UserBoarding.InitializeFromHome | UserBoarding.InitializeFromBoarding
    ) {
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
    @Action(UserBoarding.CancelFromHome)
    @Action(UserBoarding.CancelFromBoarding)
    cancelUserBoarding(
        ctx: StateContext<UserBoardingStateModel>,
        action: UserBoarding.CancelFromHome | UserBoarding.CancelFromBoarding
    ) {
        ctx.setState(
            produce((draft: UserBoardingStateModel) => {
                delete draft.boardings[action.id];
            })
        );
    }
}
