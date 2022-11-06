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
  }

  return (

    <div className='container'>
      <div style={{justifyContent: 'center' , textAlign:'center'}}>
      <h1>Hello {' ' + myname}</h1>
              <h2>Contact us</h2>
      </div>

      
        <section id="cover" className="min-vh-100">
          <div id="cover-caption">
            <div className="container">
              <div className="row text-white">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form ">
                  <div>
                    <form  className="justify-content-center">
                      <div className="form-group">
                        <label >Name</label>
                        <input type='name' className='form-control' value={myname} required />
                      </div>
                      <div className="form-group">
                        <label className="sr-only">Email</label>
                        <input type='Email' className='form-control' placeholder='Enter your name' value={myEmail} required />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1" placeholder='Enter Your msg' >Enter Your Massage</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">

                        </textarea>
                      </div> <br/>
                      <button className='btn btn-primary' onClick={massageClick} type='submit'>Contact Us</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>

  )
}

export default ContactUs