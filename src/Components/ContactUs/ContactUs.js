import React, { Component } from 'react';

import Main from '../Main/Main';
import Title from '../Title/Title';
import Img from "../Img_el/Img";
import Form from '../Form/Form';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

import image_contacts from '../../img/contact-pic.jpg';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.testClick = this.testClick.bind(this);
  }

  testClick() {
  }
  
  render() {
    return (
      <Main>
        <Title>Contact Us</Title>

        <Img src={image_contacts} alt="typewriter"/>

        <Form>
          <Input id="name-input" type="text" name="Name"/>
          <Input id="email-input" type="email" name="Email"/>
          <TextArea name="Message"/>
          <Button name="submit" onClick={this.testClick} />
        </Form>
      </Main>
    )
  }
}
