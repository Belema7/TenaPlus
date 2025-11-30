import { Type } from './action.type';

export const initialState = {
    user: null,
    loading: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.SET_USER: 
            return {
                ...state,
                user: action.user,
                error: null
            };
        case Type.SET_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case Type.SET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};