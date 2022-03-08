import { AuthState } from './AuthContext';

type AuthAction =
    { type: 'signIn'; } |
    { type: 'logOut'; } |
    { type: 'changeFavIcon', payload: string } |
    { type: 'changeUserName', payload: string }

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet',
            }
        case 'changeUserName':
            return {
                ...state,
                userName: action.payload,
            }
        case 'changeFavIcon':
            return {
                ...state,
                favouriteIcon: action.payload
            }
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favouriteIcon: undefined,
            }
        default:
            return state;
    }
}