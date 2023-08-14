import React from 'react';
//import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }: any) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  if (!domain || !clientId) {
    console.error("Missing Auth0 config");
    return null; // O cualquier manejo de error que desees hacer
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const history = useHistory();
  /*const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };*/

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;