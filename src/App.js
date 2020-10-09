import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Img from './Components/Img_el/Img';
import image_contacts from './img/contact-pic.jpg';
import Form from './Components/Form/Form';
import Input from './Components/Input/Input';
import TextArea from './Components/TextArea/TextArea';
import Button from './Components/Button/Button';

function App() {

  return (
    <div className="App">
      <Header />

      <Main>
        <h1 className="title">Contact us</h1>

        <Img src={image_contacts}/>

        <Form>
          <Input id="name-input" type="text" name="Name"/>
          <Input id="email-input" type="email" name="Email"/>
          <TextArea name="Message"/>
          <Button type="" name="submit" />
        </Form>
      
      </Main>
      <Footer />
    </div>
  );
}

export default App;
