import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auth0ProviderWithRedirectCallback from './AuthProviders';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0ProviderWithRedirectCallback
    domain="dev-osl69701.us.auth0.com"
    clientId="yDA3B6LuH0PEYkhtOtGgwWLG8vrkH0El"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0ProviderWithRedirectCallback>
  </BrowserRouter>
  
);
