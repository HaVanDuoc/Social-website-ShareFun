const initialState = {
    isModal: false
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL_LOGIN':
            return {
                isModal: true
            }

        case 'CLOSE_MODAL_LOGIN':
            return {
                isModal: false
            }

        default:
            return state
    }
}

export const selectedModalLogin = state => state.Modal.isModal

export default ModalReducer