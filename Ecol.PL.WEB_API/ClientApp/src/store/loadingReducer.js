const CLEAR_LOADING_STATE = 'CLEAR_LOADING_STATE'
const ARTICLE_LIST_LOADING = 'ARTICLE_LIST_LOADING'
const CABLE_LIST_LOADING = 'CABLE_LIST_LOADING'
const MESSAGE_LIST_LOADING = 'MESSAGE_LIST_LOADING'
const ARTICLE_LOADING = 'ARTICLE_LOADING'
const MESSAGE_LOADING = 'MESSAGE_LOADING'
const CABLE_LOADING = 'CABLE_LOADING'

// action creators

export function clearLoadingState() {
    return {
        type: CLEAR_LOADING_STATE
    }
}

export function articleListLoading() {
    return {
        type: ARTICLE_LIST_LOADING
    }
}

export function cableListLoading() {
    return {
        type: CABLE_LIST_LOADING
    }
}

export function messageListLoading() {
    return {
        type: MESSAGE_LIST_LOADING
    }
}

export function articleLoading() {
    return {
      type: ARTICLE_LOADING
    }
}

export function messageLoading() {
    return {
      type: MESSAGE_LOADING
    }
}

export function cableLoading() {
    return {
      type: CABLE_LOADING
    }
}

// reducer


const initialState = {
    articleListLoading: false,
    cableListLoading: false,
    messageListLoading: false,
    articleLoading: false,
    messageLoading: false,
    cableLoading: false,
}

export default  function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case ARTICLE_LIST_LOADING:
            return { ...state, articleListLoading: !state.articleListLoading }
        case CABLE_LIST_LOADING:
            return { ...state, cableListLoading: !state.cableListLoading }
        case MESSAGE_LIST_LOADING:
            return { ...state, messageListLoading: !state.messageListLoading }
        case ARTICLE_LOADING:
            return { ...state, articleLoading: !state.articleLoading }
        case CABLE_LOADING:
            return { ...state, cableLoading: !state.cableLoading }
        case MESSAGE_LOADING:
            return { ...state, messageLoading: !state.messageLoading }
        case CLEAR_LOADING_STATE:
            return initialState
        default:
            return state
    }
}
