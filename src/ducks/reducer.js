import axios from 'axios';

const initialState = {
    user: {},
    cart: []
}

const UPDATE_USER = 'UPDATE_USER';
const ADD_TO_CART = 'ADD_TO_CART';

export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export function updateCart(updatedCart) {
    return {
        type: ADD_TO_CART,
        payload: updatedCart
    }
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload })
        case ADD_TO_CART:
            return Object.assign({}, state, { cart: action.payload })
        default: return state;
    }
}