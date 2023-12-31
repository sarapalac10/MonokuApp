import React from "react";
import Card from 'react-bootstrap/Card';
import Home from "./Home";
import '../style/Profile.css'

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Login from "../components/Login";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <div className="profile">
      <h1>Hola {user.name} este es tu perfil: </h1>
        <Card style={{ width: '10rem'}}>
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Text>Email: {user.email}</Card.Text>
          </Card.Body>
      </Card>
      <Login />
    </div>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Home />,
});
