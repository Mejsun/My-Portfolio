import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './Contact.scss'


// todo: fix info messages and move things to env file


function ContactForm() {
  const [contact, setContact] = useState({name:'', email:'', message:''});
  const [alert, setAlert] = useState('')
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function collectInfo(){
    contact.name = nameRef.current.value
    contact.email = emailRef.current.value
    contact.message = messageRef.current.value
    validateInfo()
  }

  function validateInfo(){
    const emailRegex = /^[a-zA-Z0-9!#$%&'*+=?^_`{|}~\W]+@[a-zA-Z0-9!#$%&'*+=?^_`{|}~\W]+\.[a-z.]{2,}/gm
    const nameRegex = /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\<>?:;|=.,0-9]{2,}$/gm

    const isNameValid = contact.name && nameRegex.test(contact.name) === true
    const isEmailValid = contact.email && emailRegex.test(contact.email) === true
    
    if (isNameValid){
      nameRef.current.className = 'valid'
    }else{
      nameRef.current.className = 'invalid'
    }

    if (isEmailValid){
      emailRef.current.className = 'valid'
    }else{
      emailRef.current.className = 'invalid'
    }

    if(contact.message){ 
      messageRef.current.className ='valid'
    }else{
      messageRef.current.className = 'invalid'
    };
  }

  function contactInfo (e){
    setContact((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
  }

  function submitForm (e) {
    e.preventDefault()
    emailjs.sendForm('service_sexlscu','template_ni4vc5r', form.current, {publicKey: 'D3mVcImkhQo09jkHS'})
      .then(
        () => {
          console.log('SUCCESS!');
          setAlert('Thank you!')
        },
        (error) => {
          console.log('FAILED...', error);
          setAlert('Message failed to send')
        },
      );
  }

  return (
    <div className='contact-container wrapper' id='contact'>
    <div>
      <h1>Get in touch</h1>
      <div className='contact-grid'>
        <button className='contact-info'> <i className='fas fa-phone fa-fw'></i> 07983497817 </button>
        <button className='contact-info'> <i className='fas fa-envelope fa-fw'></i><a href="mailto:mejsunalghoul@gmail.com" style={{color: 'white'}}>Email</a> </button>
        <button className='contact-info'> <i className='fas fa-location-dot fa-fw'></i> London, UK </button>
      </div>
    </div>

    <form onSubmit={(e) => submitForm(e)} ref={form}>
      <label htmlFor='name' className='heading2'>Name </label>
      <input type='text' name='name' aria-label='input'
      onChange={(e) => {contactInfo(e)}} 
      onBlur={()=>collectInfo()} ref={nameRef} 
      />
      
      <label htmlFor='email' className='heading2'> Email </label>
      <input type='email' name='email' aria-label='input' 
      onChange={(e) => {contactInfo(e)}} 
      onBlur={()=>collectInfo()} ref={emailRef} 
      />
      
      <label htmlFor='message' className='heading2'> Message </label>
      <textarea className='message' type='text' name='message' aria-label='input' rows={5}
      onChange={(e) => {contactInfo(e)}}
      onBlur={()=>collectInfo()} ref={messageRef} 
      />
      <p className='info'>{alert}</p>
      <button type='button' className='submit' onClick={(e) => submitForm(e)}>Submit</button>
    </form>
   </div>
  )
}

export default ContactForm