import React, { useState } from 'react';
//Components
import SocialMedia from './Components/SocialMedia';
import Header from './Components/Header';
import Main from './Components/Main';
import Login from './Components/Login';

const App = () => {

const [Showlogin, setShowLogin] = useState(true);

  return (
    <>
      <Header />
      <Main />
      <SocialMedia />
      {Showlogin && <Login setShowLogin={setShowLogin} /> }
    </>
  )
};

export default App;
