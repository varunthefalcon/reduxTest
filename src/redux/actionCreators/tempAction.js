import Axios from 'axios';
import { GET_POST_API } from '../../utils/constants';

export const getPosts = (query) => {
    return async (dispatch) => {
        try {
            let url = GET_POST_API
            if (query) {
                url += '?q=' + query
            }
            let response = await Axios.get(url)
            dispatch({
                type: 'GET_POST_SUCCESS',
                payload: response.data
            })

        } catch (error) {
            console.error(error)
        }
    }
}

export const ModalOpen = (data) => {
    return (dispatch) => {
        dispatch({ type: 'MODAL_OPEN' })
        data
            ? dispatch({ type: 'ON_FIELD_CHANGE', payload: data })
            : dispatch({ type: 'RESET_FORM' })
    }
}

export const ModalClose = (data) => {
    return (dispatch) => {
        dispatch({ type: 'MODAL_CLOSE' })
        dispatch({ type: 'RESET_FORM' })
    }
}

export const FormOnChange = (data) => {
    return (dispatch) => {
        dispatch({ type: 'ON_FIELD_CHANGE', payload: data })
    }
}


export const submitAction = (params) => {

    let config = {
        method: 'POST',
        url: GET_POST_API,
        data: params,
    }
    if (params.id) {
        config.method = 'PUT'
        config.url = GET_POST_API + '/' + params.id
    }

    return async (dispatch) => {
        try {
            let response = await Axios(config)
            if ([200, 201].includes(response.status)) {
                dispatch(ModalClose())
                dispatch(getPosts())
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export const rowDelete = (params) => {

    let config = {
        method: 'DELETE',
        url: GET_POST_API + '/' + params.id
    }
    return async (dispatch) => {
        try {
            let response = await Axios(config)
            if ([200, 201].includes(response.status)) {
                dispatch(ModalClose())
                dispatch(getPosts())
            }
        } catch (error) {
            console.error(error)
        }
    }
}

