import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

//Es lo primero que se ejecuta el init
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

export const HeroesApp = () => {
    //? sE BRINDA INDO A TODOS LOS HIJOS
    const [user,dispatch] = useReducer(authReducer, {}, init) 
    // dispatch funcion que se ejecuta para mantar acciones al reducer, STATE INFO 
    //init forma para inicializar reducer 

    //Siempre se ejecuta la primera vez
    useEffect(() => {
        if(!user)return 

        localStorage.setItem('user', JSON.stringify(user));
    }, [user])
    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />   
        </AuthContext.Provider>
    )
}
