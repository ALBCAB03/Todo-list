import React, {useState} from 'react';
import './App.css';

import Header from './components/Header.jsx'
import Container from './components/Container.jsx';

function App() {
  return (
    <div className='App'>
      <div><Header/></div>
      <div><Container/></div>     
    </div>
    
  );
}

export default App