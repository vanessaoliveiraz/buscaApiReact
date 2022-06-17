import React from 'react';


import { BrowserRouter as Router } from "react-router-dom";

import Menu from './components/Menu';

import Routes from './routes';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Routes></Routes>
      </Router>
      
</div>
  );
}

export default App;
