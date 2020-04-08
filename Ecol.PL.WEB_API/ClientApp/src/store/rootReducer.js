import { combineReducers } from 'redux';

import errorState from './errorReducer'
import loadingState from './loadingReducer'
import articleState from './articleReducer'
import basketState from './basketReducer'

const reducer = combineReducers({
    errorState,
    articleState,
    loadingState,
    basketState
})

export default reducer