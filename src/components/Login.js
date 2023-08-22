import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../style/HomeStyle.css'

const Login = () => {
    const {
        loginWithRedirect,
        logout,
        isAuthenticated
    } = useAuth0();

    const logoutWithRedirect = () => {

        localStorage.removeItem('token')
        logout({
            logoutParams: {
            returnTo: window.location.origin,
            }
        })
        console.log(isAuthenticated);

    };

    const handleLogin = async () => {
        await loginWithRedirect({})
        console.log(isAuthenticated);

    }

return (
    <>
    {isAuthenticated ?
        <button className='button-salida' onClick={() => logoutWithRedirect()} >
            Log out
        </button>

    :
        <>
        <p className="texto-login">Inicia sesión para comenzar</p>
        <button className='button-inicio' onClick={() => handleLogin()} >
            Log in
        </button>
        </>
    }
    </>
  )
}

export default Login