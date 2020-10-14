import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';

function App() {

  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/contact" component={ContactUs} />
            <Route path="/about" component={AboutUs} />
            {/* <Route path="/team" component={OurTeam} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;