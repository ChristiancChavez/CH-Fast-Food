import React, { useState } from 'react';
//Components
import SocialMedia from './Components/SocialMedia';
import Header from './Components/Header';
import Main from './Components/Main';
import Login from './Components/Login';
import ProfileContextProvider from './context/ProfileContext';

const App = () => {

const [Showlogin, setShowLogin] = useState(true);
const 

  return (
    <>
      <Header />
      <ProfileContextProvider>
        <Main />
      </ProfileContextProvider>
      <SocialMedia />
      {Showlogin && <Login setShowLogin={setShowLogin} /> }
    </>
  )
};

export default App;
