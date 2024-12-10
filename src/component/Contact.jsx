import React from 'react'
import './Login.css';

const Contact = () => {
  return (

    <div className="contact-form">
      <h2>Contact Us</h2>
      <input type="text" name="name" placeholder="Your name.." />
      <input type="email" name="email" placeholder="Your email.." />
      <textarea name="message" placeholder="Your message.."></textarea>
      <button>Submit</button>
    </div>
  )
}

export default Contact
