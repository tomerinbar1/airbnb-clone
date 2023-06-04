import { store } from './store.js'
import { ADD_MODAL, REMOVE_MODAL } from './modal.reducer.js'

export function openModal(modal) {
    store.dispatch({ type: ADD_MODAL, modal })
    }

export function closeModal(modal) {
    store.dispatch({ type: REMOVE_MODAL, modal })
    }