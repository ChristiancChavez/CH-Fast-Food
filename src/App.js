import React, { useState } from 'react';
//Components
import SocialMedia from './Components/SocialMedia';
import Header from './Components/Header';
import Main from './Components/Main';
import Login from './Components/Login';
import ProfileContextProvider from './context/ProfileContext';

const App = () => {

const [Showlogin, setShowLogin] = useState(true);

  return (
    <>
      <Header />
      <ProfileContextProvider>
        <Main />
        <SocialMedia />
        {Showlogin && <Login setShowLogin={setShowLogin} /> }
      </ProfileContextProvider>
    </>
  )
};

export default App;
