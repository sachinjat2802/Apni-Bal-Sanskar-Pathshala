import React from 'react';
import QRCode from 'qrcode.react';
import config from '../config.json';
import './Contact.css';

const Contact = () => {
  const upiUrl = `upi://pay?pa=${config.contact.bankAccount.upi}`;

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <div className="payment-info">
          <h2>Support Us</h2>
          <p>Scan the QR code to make a donation.</p>
          <QRCode value={upiUrl} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
