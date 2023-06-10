import { userService } from '../services/user.service.js'

export const SET_USER = 'SET_USER'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USERS = 'SET_USERS'
export const SET_DB_USER = 'SET_DB_USER'

const initialState = {
    user: userService.getLoggedinUser(),
    userFromDb: null,
    users: [],
    watchedUser: null,
    notifications: []
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user }

        case SET_WATCHED_USER:
            return { ...state, watchedUser: action.user }

        case SET_DB_USER:
            return { ...state, userFromDb: action.updatedDbUser }

        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }

        case SET_USERS:
            return { ...state, users: action.users }

        default:
            return state
    }

}
