// import { stayServiceLocal } from "../services/stay.service.local.js"
import {StayService} from '../services/stay.service.js'
import { store } from './store.js'
import { ADD_STAY, REMOVE_STAY, SET_STAYS, SET_IS_LOADING, UPDATE_STAY,REQUEST_STAYS } from './stay.reducer.js'



export async function loadStays(filterBy) {
// export async function loadStays(filterBy, sortBy) {
    // const sortAndFilter = {filterBy , sortBy}
    // console.log(sortAndFilter)
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    try {
        const stays = await StayService.getStays(filterBy)
        store.dispatch({ type: SET_STAYS, stays })
        return stays
    }
    catch (err) {
        console.log('stay action -> Cannot load stays', err)
        throw err
    }
    finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function removeStay(stayId) {
    try {
        const res = await StayService.remove(stayId)
        store.dispatch({ type: REMOVE_STAY, stayId })
        return res
    }
    catch (err) {
        console.log('stay action -> Cannot remove stay', err)
        throw err
    }
}

export async function saveStay(stay) {
    const type = stay._id ? UPDATE_STAY : ADD_STAY
    // console.log(type)
    try {
        const savedStay = await StayService.save(stay)
        store.dispatch({ type, stay: savedStay })
        return savedStay
    }
    catch (err) {
        console.log('stay action -> Cannot save stay', err)
        throw err
    }
}
