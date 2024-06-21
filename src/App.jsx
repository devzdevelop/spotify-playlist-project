import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
// import AuthorizationPage from './pages/AuthorizationPage'
import HomePage from './pages/HomePage';

function App() {
  const [trackData, setTrackData] = useState({});
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
