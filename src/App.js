import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import Drinks from './Components/Drinks/Drinks';
import Home from './Components/Home/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" children={<Home />} />
            <Route path="/contact" children={<ContactUs />} />
            <Route path="/about" children={<AboutUs />} />
            <Route path="/drinks" children={<Drinks />} />
            {/* <Route path="/team" children={OurTeam} /> */}
            {/* <Route path="*" children={} /> */}
          </Switch>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;