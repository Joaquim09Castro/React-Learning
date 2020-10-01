import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <img class='App-logo' src={logo}></img>
      <Footer />
    </div>
  );
}

export default App;
