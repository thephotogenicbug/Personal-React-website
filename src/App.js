import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './Components/home/home';
import {Helmet} from 'react-helmet'
function App() {
  return (
    <div >
      <Helmet>
        <meta charSet="UTF-8"/>
        <title>thephotogenicbug.dev</title>
        <meta name="description" content="thephotogenicbug portfolio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content=""/>
      </Helmet>
     <Home/>
    </div>
  );
}

export default App;
