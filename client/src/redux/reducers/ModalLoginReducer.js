const ModalLoginReducer = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_MODAL_LOGIN':
            return state = true

        case 'CLOSE_MODAL_LOGIN':
            return state = false

        default:
            return state
    }
}

export default ModalLoginReducer