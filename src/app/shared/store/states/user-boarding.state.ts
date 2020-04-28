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

    @Action(UserBoarding.InitializeFromHome)
    @Action(UserBoarding.InitializeFromBoarding)
    setUserBoardings(
        ctx: StateContext<UserBoardingStateModel>,
        action: UserBoarding.InitializeFromHome | UserBoarding.InitializeFromBoarding
    ) {
        ctx.setState(
            produce((draft: UserBoardingStateModel) => {
                draft.boardings = arrayToObject(action.boardings, 'id') || {};
            })
        );
    }
}
