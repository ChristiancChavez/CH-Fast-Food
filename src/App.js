import React from 'react';
//Components
import Header from './Components/Header/Header';
import Main from './Main';
import SocialMedia from './Components/SocialMedia/SocialMedia';
//Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SocialMedia />
    </div>
  );
}

export default App;
