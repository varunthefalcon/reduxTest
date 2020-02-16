const initialState = {
    id: null,
    title: "",
    author: "",
    description: ""
}

export default function formHandling(state = initialState, action) {

    if (action.type === 'ON_FIELD_CHANGE') {
        return { ...state, ...action.payload }
    }

    if (action.type === 'RESET_FORM') {
        return { ...initialState }
    }
    return state
}
