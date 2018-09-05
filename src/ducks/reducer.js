import axios from 'axios';

const initialState = {
    user: {},
    cart: [],
    cartTotal: 0
}

const UPDATE_USER = 'UPDATE_USER';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL'

export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}
// RETURNS A NEW UPDATED CART EVERY TIME A CHANGE IS MADE //
export function updateCart(updatedCart) {
    return {
        type: ADD_TO_CART,
        payload: updatedCart
    }
}

export function updateCartTotal(updatedTotal){
    return {
        type: UPDATE_CART_TOTAL,
        payload: updatedTotal
    }
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload })
        case ADD_TO_CART:
            return Object.assign({}, state, { cart: action.payload })
        case UPDATE_CART_TOTAL:
            return Object.assign({}, state, {cartTotal: action.payload})
        default: return state;
    }
}