import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

function Login() {
  const navigate = useNavigate();
  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [cheak, setCheak] = useState(false);

  const signIn = e => {
    e.preventDefault();
    let mail = localStorage.getItem('Email').replace(/"/g, "");
    let pass = localStorage.getItem('Password').replace(/"/g, "");

    if (!emailLog || !passwordLog) {
      setCheak(true);
      <div>
        <Alert variant="success" style={{ width: "42rem" }}>
          <Alert.Heading>
            This is a success alert which has green background
          </Alert.Heading>
        </Alert>
      </div>


    } else if (passwordLog !== pass || emailLog !== mail) {
      setCheak(true);
      <>
        function signIn() {
          alert("incorrect password or username")
        }
      </>
    } else {
      setCheak(true);
      navigate('/home')

    }

  }

  return (

    <div className='login'>
      <div className='login_con'>
        <h1>Login Here</h1>
        <form>
          <h5>Email :</h5>
          <input type='mail' placeholder='Enter your Email' onChange={(e) => setEmailLog(e.target.value)} required />
          <h5>Password :</h5>
          <input type='password' placeholder='Enter your password'  onChange={(e) => setPasswordLog(e.target.value)} required />
          <button type='submit'  onClick={signIn}  className='loginsignbtn'>Login</button>
          <p className='para' >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.</p>
        </form>
      </div>
    </div>

    /* <div className='container'>
  <form >
    <h1>Login</h1>
    <div className='form-group'>
      <label>Email</label>
      <input type='Email' className='form-control' placeholder='Enter your Email' onChange={(e) => setEmailLog(e.target.value)} required />
    </div>
    <div className='form-group'>
      <label>Password </label>
      <input type='password' className='form-control' placeholder='Enter your Password ' onChange={(e) => setPasswordLog(e.target.value)} required />
    </div><br />
    <button type='submit' onClick={signIn} className='btn btn-dark '>Login</button>

  </form>
</div> */




  )
}

export default Login