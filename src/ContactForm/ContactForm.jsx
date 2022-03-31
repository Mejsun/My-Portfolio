import React, {useRef, useState} from 'react'

function ContactForm() {

  const [contact, setContact] = useState({name:'', email:'', message:''});
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

  if (contact.name && nameRegex.test(contact.name) === true){
    nameRef.current.className = 'valid'
    console.log('Name valid!');
  }else{
    nameRef.current.className = 'invalid'
    console.log('Name invalid!');
  }

  if (contact.email && emailRegex.test(contact.email) === true){
    emailRef.current.className = 'valid'
    console.log('email valid!')
  }else{
    emailRef.current.className = 'invalid'
    console.log('email error!')
  }

  if(contact.message === ''){ 
    messageRef.current.className ='invalid'
    console.log('msg error!')
  }else{
    messageRef.current.className = 'valid'
    console.log('msg ok!')
  };
}

function contactInfo (e){
  setContact((info) => ({
    ...info,
    [e.target.name]: e.target.value,
  }));
}

async function submitForm (){
  if(contact.name && contact.email && contact.message){
      const res = fetch("https://mejsunsnodemailer.herokuapp.com/contact", {
      method: "POST",
      headers: {"Content-type": "application/json",},
      body: JSON.stringify ({contact}),
    })
     .then((res) => res.json())
     .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success") {
        alert("Thank you!");
        nameRef.current.className = 'valid'
        emailRef.current.className = 'valid'
        messageRef.current.className = 'valid'
      } else if (resData.status === "fail") {
        alert("Message failed to send");
      }
    })
  } 
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
    <form>
      <label htmlFor='name' className='heading2'>Name </label>
      <input type='text' name='name'
      onChange={(e) => {contactInfo(e)}} 
      onBlur={()=>collectInfo()} ref={nameRef} 
      />
      
      <label htmlFor='email' className='heading2'> Email </label>
      <input type='email' name='email' 
      onChange={(e) => {contactInfo(e)}} 
      onBlur={()=>collectInfo()} ref={emailRef} 
      />
      
      <label htmlFor='message' className='heading2'> Message </label>
      <input className='message' type='text' name='message' 
      onChange={(e) => {contactInfo(e)}}
      onBlur={()=>collectInfo()} ref={messageRef} 
      />
      
      <button type='button' className='submit'
      onClick={() => submitForm()}
      >Submit</button>
    </form>
   </div>
  )
}

export default ContactForm