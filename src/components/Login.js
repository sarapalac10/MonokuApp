import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const Login = () => {
    const {
        user,
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
        <>
        <Button variant="primary" onClick={() => logoutWithRedirect()} >
            Log out
        </Button>
        <div>
        <span className="user-info">
            <img
                src={user.picture}
                alt="Profile"
                className="nav-user-profile d-inline-block rounded-circle mr-3"
                width="50"
            />
            <h6 className="d-inline-block">{user.name}</h6>
            </span>
        </div>
        </>
    :
        <Button variant="primary" onClick={() => handleLogin()} >
            Log in
        </Button>
    }
    </>
  )
}

export default Login