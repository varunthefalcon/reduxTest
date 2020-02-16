const initialState = {
    isModalOpen: false,
    // modalToggle: () => { },
    // modalSubmit: () => { }
}

export default function modalHandling(state = initialState, action) {

    if (action.type === 'MODAL_OPEN') {
        return { ...initialState, isModalOpen: true }
    }

    if (action.type === 'MODAL_CLOSE') {
        return { ...initialState, isModalOpen: false, }
    }
    return state
}
