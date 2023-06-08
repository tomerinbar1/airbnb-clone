export const SET_STAYS = 'SET_STAYS'
export const REMOVE_STAY = 'REMOVE_STAY'
export const ADD_STAY = 'ADD_STAY'
export const UPDATE_STAY = 'UPDATE_STAY'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const REQUEST_STAYS = 'REQUEST_STAYS'
// export const UNDO_REMOVE_STAY = 'UNDO_REMOVE_STAY'

const initialState = {
    stays: [],
    isLoading: false,
    // lastRemovedStay: null
}


export function stayReducer(state = initialState, action) {
    // console.log('action', action)
    let stays
    // let shoppingStayt

    switch (action.type) {
        // Stays
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case REQUEST_STAYS:
            // get stay from local storage
            const stays = JSON.parse(localStorage.getItem('stays'))
            if (stays && stays.length) {
                return { ...state, stays, isLoading: false }
            }
            return { ...state, isLoading: true }
        case SET_STAYS:
            // set localstorage
            localStorage.setItem('stays', JSON.stringify(action.stays))
            return { ...state, stays: action.stays }
        case REMOVE_STAY:
            stays = state.stays.filter(c => c._id !== action.stayId)
            return { ...state, stays }
        case ADD_STAY:
            stays = [...state.stays, action.stay]
            return { ...state, stays }
        case UPDATE_STAY:
            stays = state.stays.map(stay => stay._id === action.stay._id ? action.stay : stay)
            return { ...state, stays }


        default:
            return state
    }
}