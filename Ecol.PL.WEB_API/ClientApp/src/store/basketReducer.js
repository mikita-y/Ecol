const CLEAR_BASKET_STATE = 'CLEAR_BASKET_STATE'
const ADD_CABLE_TO_BASKET = 'ADD_CABLE_TO_BASKET'
const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA'
const UPDATE_CABLE_IN_BASKET = 'UPDATE_CABLE_IN_BASKET'
const DELETE_CABLE_FROM_BASKET = 'DELETE_CABLE_FROM_BASKET'
const SET_BASKET_STATE = 'SET_BASKET_STATE'


// action creators

export function clearBasketState() {
    return {
        type: CLEAR_BASKET_STATE
    }
}

export function setCustomerData(payload) {
    return {
        type: SET_CUSTOMER_DATA,
        payload
    }
}

function setBasketState(payload) {
    return {
        type: SET_BASKET_STATE,
        payload
    }
}

export function addCableToBasket(payload) {
    return {
        type: ADD_CABLE_TO_BASKET,
        payload
    }
}

export function updateCableInBasket(payload) {
    return {
        type: UPDATE_CABLE_IN_BASKET,
        payload
    }
}

export function deleteCableFromBasket(payload) {
    return {
        type: DELETE_CABLE_FROM_BASKET,
        payload
    }
}


// reducer


const initialState = {
    cables: [],
    fullName: "",
    phoneNumber: ""
}

export default  function errorReducer(state = initialState, action) {

    switch (action.type) {
        case SET_CUSTOMER_DATA:
            return { ...state, [action.payload.field]: action.payload.value }
        case SET_BASKET_STATE:
            return { ...state, ...action.payload }
        case ADD_CABLE_TO_BASKET:
            return { ...state, cables: [...state.cables, { ...action.payload, length: 1 }] }
        case DELETE_CABLE_FROM_BASKET:
            let index = state.cables.indexOf(action.payload);
            let newCables = [...state.cables];
            newCables.splice(index, 1);
            return { ...state, cables: newCables }
        case UPDATE_CABLE_IN_BASKET:
            const item = state.cables.find(x => x.id == action.payload.id);
            index = state.cables.indexOf(item);
            newCables = [...state.cables];
            newCables[index] = action.payload
            return { ...state, cables: newCables }            
        case CLEAR_BASKET_STATE:
            return initialState
        default:
            return state
    }
}

export function checkBasket() {
    return function(dispatch) {
        if(localStorage.basket) {
            dispatch(setBasketState(JSON.parse(localStorage.basket)))
        }
    }
}

export function saveBasket() {
    return function(dispatch, getState) {
        localStorage.setItem("basket", JSON.stringify(getState().basketState));
    }
}