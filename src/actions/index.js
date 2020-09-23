import {
    FETCH_AUTH_USER_START,
    FETCH_AUTH_USER_SUCCESS,
    FETCH_AUTH_USER_ERROR
} from '../actonTypes'

const fetchAuthUser = (data) => async (dispatch) => {
    dispatch({
        type: FETCH_AUTH_USER_START,
        payload: data
    })
};
