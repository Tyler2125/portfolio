import React,{useState} from 'react'
import emailjs from '@emailjs/browser';
const modalClose=document.getElementById("close-modal")
const successAlert= document.getElementById('Success')

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hylrqnn', 'template_ncvwa28', e.target, 'dzPnM700lesxIG15U')
      .then((result) => {
          console.log(result.text);
          alert("Your Message has been Sent")
          document.getElementById('contact-form').reset()
      }, (error) => {
          alert('Your message was not sent')
      });}
  return (
    <div id='Contact' className='each-section'><h1>Contact</h1>
    <form id='contact-form' onSubmit={sendEmail}>
    <label htmlFor="fname">Full Name:</label>
    <input name="from_name"id="fName"type="Text" maxLength="25"required placeholder="Enter your Full Name"/>
<label htmlFor="email">Email: </label>
<input id="email"type="email" name="user_email"required placeholder='Enter your Email'/>   
 <label>Message</label>
      <textarea name="message"  maxLength="2500" required placeholder='Type your message here!'/>
 <button className="SubmitBTN"type="submit" value="Send">Submit</button>
  </form>
    </div>
  )
}

export default Contact;
