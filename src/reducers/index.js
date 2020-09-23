import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import mainPage from "./mainPage";
import singUpPage from "./singUpPage"

export default history => combineReducers({
    mainPage,
    singUpPage,
    router: connectRouter(history)
});
