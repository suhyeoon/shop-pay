import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    GET_CART_ITEMS
} from '../_actions/types';


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
                    ...previousState,
                    cart: action.payload
                }
            }
        case GET_CART_ITEMS:
            return {
                ...previousState,
                cartDetail: action.payload
            }
        default:
            return previousState;
    }
}