import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {

  return (
    <div className="App">
      <Header />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </BrowserRouter> */}
        <ContactUs />
      <Footer />
    </div>
  );
}

export default App;