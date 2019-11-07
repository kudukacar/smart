import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import walking2 from '../images/walking2.jpg';

const Contact = () => (
  <React.Fragment>
    <NavBar/>
    <div className="contact">
      <div>
        <div className="contactheader">Contact us</div>
        <p>Please call, text, or e-mail with any questions, comments, or scheduling inquiries.  We serve Queens, Nassau County, and Manhattan, and accept Medicare.</p>
        <div className="contactinfo">Email: mthomas@smartmovesphysicaltherapy.com</div>
        <div className="contactinfo">Phone: 678-372-7972</div>
        <div className="contactinfo">Fax: 347-826-0865</div>
      </div>
      <img src={walking2} alt="home physical therapy" />
    </div>
    <Footer/>
  </React.Fragment>
)

export default Contact;