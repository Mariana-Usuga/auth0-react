import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth0Provider';
import Profile from './components/profile';
import Home from './components/home';

function App() {
  return (
    <Auth0ProviderWithHistory>
      <h1>Navbar</h1>
      <div className='container flex-grow-1'>
        <div className='mt-5'>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/profile" Component={Profile} />
          </Routes>
        </Router>
        </div>
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
