import React from 'react'
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
    let history = useNavigate() 

    //Redireccinar de donde se llama estee componente. Skills del navegador con react para poder irme a tras y hacia adelante con el nav web

    const handleLogin = () => {
        history("/",{replace:true}) // sabe que me salga de la app web, remplaza la historia de history evitando que se devuelve a login otra vez
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
