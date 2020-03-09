import React from 'react';
import Header from './components/Header';
import Routes from './routes'

import './style.css';
import Main from './pages/main';

const App = () => (
  <div className="App">

    <Header />
    <Routes />
    
  </div>
);


export default App;
