import React from 'react'
import '../css/ContactUs.css'

function ContactUs() {
  let myname = localStorage.getItem('Name').replace(/"/g, "");
  let myEmail = localStorage.getItem('Email').replace(/"/g, "");

  const massageClick = () => {
    <>
      function massageClick() {
        alert("your msg send succesfully")
      }
    </>
    console.log('Your msg', massageClick)
  }

  return (
    <div className='ContactUs'>
      <div className='contact_con'>
        <h1>Contact US</h1>
        <form>
        <h5>Name :</h5>
          <input type='mail' placeholder='Enter your Email' value={myname} required />
          <h5>Email :</h5>
          <input type='mail' placeholder='Enter your Email' value={myEmail} required />
          <h5>Massage</h5>
          <textarea className='row3' placeholder='Write your Massage '></textarea>
          <button type='submit'  onClick={massageClick}  className='loginsignbtn'>Contact Us</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs