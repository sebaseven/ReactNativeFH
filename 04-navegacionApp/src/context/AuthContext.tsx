// definir que info tendre aca

import React, { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

export interface AuthState {
    isLoggedIn: Boolean;
    userName?: string;
    favouriteIcon?: string;
}

//estado inicial

export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favouriteIcon: undefined,
}

//esta interface se usa para decirle a react como luce el context y que expone

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeIcon: (iconName: string) => void; //le paso el nombre del icono
    changeUsername: (userName: string) => void; //le paso el nombre del usuario
}

// Crear contexto

export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado

export const AuthProvider = ({ children }: any) => {
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }
    const logOut = () => {
        dispatch({ type: 'logOut' })
    }
    const changeIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }
    const changeUsername = (userName: string) => {
        dispatch({ type: 'changeUserName', payload: userName })
    }
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeIcon,
            changeUsername,
            logOut,
        }}>
            {
                children
            }
        </AuthContext.Provider>
    )
} 