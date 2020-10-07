import React, { Component } from 'react';


export default class Form extends Component {
  render() {
    return (        
        <form className="form">
          <label htmlFor="name-input" id="name-label">Name:</label>
          <input id="name-input" type="text" />

          <label htmlFor="email-input" id="email-label">Email:</label>
          <input id="email-input" type="email" />
          
          <label htmlFor="msg-input" id="msg-label">Message:</label>
          <input id="msg-input" type="text" />

          <input id="send-btn" type="submit" value="send"/>
        </form>
    )
  }
}