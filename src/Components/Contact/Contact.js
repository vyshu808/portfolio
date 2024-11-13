import React from 'react';
import './Contact.css';
import accenture from '../../assets/Accenture   Logo.png';
import google from '../../assets/Google.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import email from '../../assets/email.png';

const Contact = () => {
  return (
    <section id='ContactPage'>
      <div id='Companies I worked '>
        <h1 className='contactPageTitle'>Companies I worked</h1>
        <p className='companyDesc'>
          I had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with include:
        </p>
        <div className='companyImg'>
          <img src={accenture} alt='Company' className='companyImg'/>
          <img src={google} alt='Company' className='companyImg'/>
        </div>
      </div>
      <div id='Contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form given below to discuss my work opportunities</span>
        <form className='contactForm'>
          <input type='text' className='name' placeholder='Your Name'/>
          <input type='email' className='email' placeholder='Your E-mail'/>
          <textarea className='Msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='send' className='submitBtn'>Submit</button>
          <div className='Links'>
            <a href="https://www.linkedin.com/in/sreepada-vaishnavi-059739333/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt='LinkedIn' className='link'/>
            </a>
            <a href="https://github.com/vyshu808" target="_blank" rel="noopener noreferrer">
              <img src={github} alt='GitHub' className='link'/>
            </a>
            <a href="mailto:vaishnavisreepada46@gmail.com">
              <img src={email} alt='E-mail' className='link'/>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
