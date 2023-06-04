export const SET_MODAL_TO_OPEN = 'SET_MODAL_TO_OPEN'
export const SET_MODAL_TO_CLOSE = 'SET_MODAL_TO_CLOSE'

const initialState = {
  modalToOpen: null,
  modalToClose: null,
}

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_TO_OPEN:
      return { ...state, modalToOpen: action.modalToOpen }
    case SET_MODAL_TO_CLOSE:
      return { ...state, modalToClose: action.modalToClose }
    default:
      return state
  }
}
