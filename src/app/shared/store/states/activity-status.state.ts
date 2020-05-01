import { Injectable } from '@angular/core';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { produce } from 'immer';
import { ActivityStatus } from '../actions/activity-status.actions';

export interface ActivityStatusStateModel {
    acting: boolean;
    loading: boolean;
}

@State<ActivityStatusStateModel>({
    name: 'activityStatus',
    defaults: {
        acting: false,
        loading: false,
    },
})
@Injectable()
export class ActivityStatusState {
    @Selector()
    static getActingStatus(state: ActivityStatusStateModel): boolean {
        return state.acting;
    }

    @Selector()
    static getLoadingStatus(state: ActivityStatusStateModel): boolean {
        return state.loading;
    }

    /**
     * Sets the acting status for the application (When POST, PUT, DELETE, and PATCH HTTP calls are in progress)
     * @param ctx
     * @param action
     */
    @Action(ActivityStatus.SetActingStatus)
    setActingStatus(ctx: StateContext<ActivityStatusStateModel>, action: ActivityStatus.SetActingStatus) {
        ctx.setState(
            produce((draft: ActivityStatusStateModel) => {
                draft.acting = action.status;
            })
        );
    }

    /**
     * Sets the loading status for the application (When GET HTTP calls are in progress)
     * @param ctx
     * @param action
     */
    @Action(ActivityStatus.SetLoadingStatus)
    setLoadingStatus(ctx: StateContext<ActivityStatusStateModel>, action: ActivityStatus.SetLoadingStatus) {
        ctx.setState(
            produce((draft: ActivityStatusStateModel) => {
                draft.loading = action.status;
            })
        );
    }
}
