import { createSelector, createFeatureSelector, select } from '@ngrx/store';
import { IUser } from '../core/interfaces/user.interface';
import { AppState } from './app.reducer';
import { RouterReducerState, getSelectors } from '@ngrx/router-store';

export const selectApp = createFeatureSelector<AppState>('app');

export const selectUsers = createSelector(
  selectApp,
  (state: AppState) => state.users
);

export const selectRouter = createFeatureSelector<AppState, RouterReducerState<any>>('router');

const { selectRouteParam } = getSelectors(selectRouter);

export const selectUserUUID = selectRouteParam('uuid');

export const selectCurrentUser = createSelector(
  selectUserUUID,
  selectUsers,
  (uuid, users: IUser[]) => users?.find(user => {return user.login.uuid === uuid;})
);

export const selectSimilarUsers = createSelector(
  selectUserUUID,
  selectUsers,
  (uuid, users: IUser[]) => users?.filter(user => {return user.login.uuid !== uuid;})
);
