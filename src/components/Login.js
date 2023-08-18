import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const Login = () => {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const logoutWithRedirect = () =>
    logout({
        logoutParams: {
        returnTo: window.location.origin,
        }
    });

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
        <Button variant="primary" onClick={() => loginWithRedirect({})} >
            Log in
        </Button>
    }
    </>
  )
}

export default Login