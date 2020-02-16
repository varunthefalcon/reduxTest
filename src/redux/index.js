import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import postsListReducer from './reducers/PostList'
import modalHandlingReducer from './reducers/ModalHandling'
import formHandlingReducer from './reducers/FormHandling'

const rootReducer = combineReducers({ postsListReducer, modalHandlingReducer, formHandlingReducer })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const myStore = createStore(rootReducer,
    //  composeEnhancers(
    applyMiddleware(thunk)
    // )
)