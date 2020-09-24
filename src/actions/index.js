import {
    FETCH_AUTH_USER_START,
    FETCH_AUTH_USER_SUCCESS,
    FETCH_AUTH_USER_ERROR
} from '../actonTypes'

const fetchAuthUser = (data) => async (dispatch) => {
    dispatch({
        type: FETCH_AUTH_USER_START,
    });

    try {
        const userAuth = await fetchAuthUser(data);
        if (userAuth.error)
            throw userAuth
        dispatch({
            type:FETCH_AUTH_USER_SUCCESS,
            payload: userAuth
        })
    } catch (e) {
        dispatch({
            type: FETCH_AUTH_USER_ERROR,
            payload: e,
            error: true
        })
    }
};
