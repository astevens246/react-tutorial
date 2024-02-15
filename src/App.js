import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Title />
      <img src={logo} className="App-logo" alt="logo" />
      <Outlet />
      <POPOSList />
      <Footer/>
    </div>
  );
}

export default App;
