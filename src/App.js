import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
function App() {
  return (
    <HashRouter >
      <Header/>
      <Route exact path='/' component={Main}/>
    </HashRouter>
  );
}

export default App;
