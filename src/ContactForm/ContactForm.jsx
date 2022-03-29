import React from 'react'

function ContactForm() {
  return (
    <div className='wrapper'>
    <h1>Get in touch</h1>
    <form>
      <label htmlFor='name'>Name </label>
      <input type='text' name='name'
      //onChange={(e) => {contactInfo(e)}} 
      //onBlur={()=>collectInfo()} ref={nameRef} 
      />
      
      <label htmlFor='email'> Email </label>
      <input type='email' name='email' 
      //onChange={(e) => {contactInfo(e)}} 
      //onBlur={()=>collectInfo()} ref={emailRef} 
      />
      
      <label htmlFor='message'> Message </label>
      <input className='message' type='text' name='message' 
      //onChange={(e) => {contactInfo(e)}}
      //onBlur={()=>collectInfo()} ref={messageRef} 
      />
      
      <button type='button' 
      //onClick={() => submitForm()}
      >Submit</button>
    </form>
    <div>
    <button> <i className='fas fa-phone fa-fw'></i> 07983497817 </button>
    <button> <i className='fas fa-envelope fa-fw'></i><a href="mailto:mejsunalghoul@gmail.com">Email</a> </button>
    <button> <i className='fas fa-location-dot fa-fw'></i> London, UK </button>
    </div>
   </div>
  )
}

export default ContactForm