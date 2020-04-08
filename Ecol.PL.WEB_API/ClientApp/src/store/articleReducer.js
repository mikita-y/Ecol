const SET_ARTICLE_SUCCESS = 'SET_ARTICLE_SUCCESS'
const CLEAR_ARTICLE_STATE = 'CLEAR_ARTICLE_STATE'
const ARTICLE_LOADING = 'ARTICLE_LOADING'

// action creators

export function setArticleSucces(payload) {
  return {
    type: SET_ARTICLE_SUCCESS,
    payload
  }
}

export function clearArticleState() {
  return {
    type: CLEAR_ARTICLE_STATE
  }
}

export function articleLoading() {
  return {
    type: ARTICLE_LOADING
  }
}

// reducer

const initialState = {
  loading: false,
  success: false
}

export default  function articleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLE_SUCCESS:
      return { ...state, success: action.payload }
    case ARTICLE_LOADING:
      return { ...state, loading: !state.loading }
    case CLEAR_ARTICLE_STATE:
      return initialState
    default:
      return state
  }
}

/*
export function createPostRequest(post) {
  return function(dispatch) {
    dispatch(articleLoading())
    const url = `/post`;
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      },
    };
    axios
      .post(url, post, config)
      .then(response => {
        dispatch(setCreatedPostId(response.data))
      })
      .catch(error => {
        setErrorFunction(error, (e) => dispatch(setArticleError(e)));
      })
      .finally(() => {
        dispatch(articleLoading())
      });
  }
}*/