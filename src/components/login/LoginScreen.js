import React, { useContext } from 'react'
import { useNavigate} from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
    let history = useNavigate() 

    //Redireccinar de donde se llama estee componente. Skills del navegador con react para poder irme a tras y hacia adelante con el nav web
    const {user, dispatch} = useContext(AuthContext)

    const handleLogin = () => {
        // history("/",{replace:true}) // sabe que me salga de la app web, remplaza la historia de history evitando que se devuelve a login otra vez

        const lastPath = localStorage.getItem('lastPath') || '/'

        dispatch({
            type : types.login,
            payload : {
                name : 'Alejandro',
                logged : true 
                }
            
        })
        console.log({user, dispatch})
        history(lastPath,{replace:true})
    }
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
