import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth0ProviderWithHistory from './auth0Provider';

function App() {
  return (
    <Auth0ProviderWithHistory>
      <h1>Navbar</h1>
      <div className=''></div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
