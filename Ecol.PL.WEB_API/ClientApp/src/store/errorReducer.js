const CLEAR_ERROR_STATE = 'CLEAR_ERROR_STATE'
const SET_ERROR = 'SET_ERROR'
const DELETE_ERROR = 'DELETE_ERROR'

// action creators

export function clearErrorState() {
  return {
    type: CLEAR_ERROR_STATE
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload
  }
}

export function deleteError(payload) {
  return {
    type: DELETE_ERROR,
    payload
  }
}


// reducer


const initialState = {
  errors: []
}

export default  function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, errors: [...state.errors, action.payload] }
    case DELETE_ERROR:
      let [ , ...errors] = state.errors;
      return { ...state, errors }
    case CLEAR_ERROR_STATE:
      return initialState
    default:
      return state
  }
}


export function setErrorFromRequest(error){
  if (error.response) {
    if(error.response.data){
      if(error.response.data.errors){        
        let errorMessage = "";
        const errors = error.response.data.errors;

        for (let key in errors) {
          errorMessage += errors[key] + '\r\n';
        }  

        return setError(errorMessage)
      }

    }
    else {
      return setError(error.response.statusText);
    }
  }
  else if (error.request) {
    return setError("Error with request");
  } 
  else {
    return setError("Error!");
  }
}