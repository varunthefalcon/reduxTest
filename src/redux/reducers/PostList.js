export default function postsListReducer(state = [], action) {

    if (action.type === 'GET_POST_SUCCESS') {
        return action.payload
    }
    return state
}