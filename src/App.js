import React from 'react';
import Header from './Components/Header/Header';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
