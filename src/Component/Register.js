import React, { useState } from 'react'
import Login from './Login';

function Register() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [cheak, setCheak] = useState(false);
    const [login, setLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !username || !email || !password || !phone) {
            setCheak(true);

        } else {
            setCheak(false);
            localStorage.setItem("Email", JSON.stringify(email))
            localStorage.setItem("Password", JSON.stringify(password))
            localStorage.setItem("Name", JSON.stringify(name))
            localStorage.setItem("UserName", JSON.stringify(username))
            localStorage.setItem("Phone", JSON.stringify(phone))
            console.log('saved')

            setLogin(!login)
        }
    }

    const handleClick = () => {
        setLogin(!login);
    }


    return (
        <div className='container my-3' style={{border: '1px solid black',}}  >

            {login ? (
                <form  onSubmit={handleSubmit} >
                    <h1>Register</h1>


                    <div className="row text-white col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form " >
                        <div className=" text-center form ">
                            <div>

                                <div  className="justify-content-center">
                                    <div className='form-group'>
                                        <label> Full Name</label>
                                        <input for='name' type='name' className='form-control' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Username</label>
                                        <input type='name' className='form-control' placeholder='Enter your Username' onChange={(e) => setUsername(e.target.value)} required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input for='email' type='email' className='form-control' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Password </label>
                                        <input type='password' className='form-control' placeholder='Enter your Password ' onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Mobile No</label>
                                        <input for='phone' type='number' className='form-control' placeholder='Enter your Mobile No' onChange={(e) => setPhone(e.target.value)} required />
                                    </div>
                                    <br />
                                   

                                </div>

                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-dark '>Register</button>
                                    <p onClick={handleClick}>Alredy Register Login in?</p>

                </form>
            ) : (

                <Login />
            )}

        </div>
    )
}

export default Register