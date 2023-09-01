import { createAction, props } from "@ngrx/store"
import { IUser } from "../core/interfaces/user.interface"

export const APP_ACTIONS = {
    GET_USERS: '[Users] Get users',
    GET_USERS_SUCCESS: '[Users] Get users success',
    GET_USERS_FAILURE: '[Users] Get users failure',
}

export const getUsers = createAction(APP_ACTIONS.GET_USERS)
export const getUsersSuccess = createAction(
    APP_ACTIONS.GET_USERS_SUCCESS,
    props<{users: IUser[]}>()
)
export const getUsersFailure = createAction(
    APP_ACTIONS.GET_USERS_FAILURE,
    props<{error: string}>()
)
