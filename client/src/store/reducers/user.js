import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    ON_SUCCESS_BUY
} from '../actions/types';

export default function (previousState = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...previousState, register: action.payload }
        case LOGIN_USER:
            return { ...previousState, loginSucces: action.payload }
        case AUTH_USER:
            return { ...previousState, userData: action.payload }
        case LOGOUT_USER:
            return { ...previousState }
        case ADD_TO_CART:
            return {
                ...previousState,
                userData: {
                    ...previousState.userData,
                    cart: action.payload
                }
            }
        case GET_CART_ITEMS:
            return { ...previousState, cartDetail: action.payload }
        case REMOVE_CART_ITEM:
            return {
                ...previousState,
                userData: {
                    ...previousState.userData,
                    cart: action.payload.cart
                },
                cartDetail: action.payload.productInfo
            }
        case ON_SUCCESS_BUY:
            return {
                ...previousState,
                userData: {
                    ...previousState.userData,
                    cart: action.payload.cart
                },
                cartDetail: action.payload.cartDetail
            }
        default:
            return previousState;
    }
}