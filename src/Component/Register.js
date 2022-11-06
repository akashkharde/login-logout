import React, { useState } from 'react'
import '../css/Register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [cheak, setCheak] = useState(false);

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
            navigate('/login');
        }
    }

    const handleClick = () => {
        navigate('/login');

    }

    return (

        <div className='register'>
            <div className='register_con'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit} >
                    <h5>Full Name :</h5>
                    <input type='name' placeholder='Enter your Full Name' onChange={(e) => setName(e.target.value)} required />
                    <h5>Username :</h5>
                    <input type='name' placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} required />
                    <h5>Email :</h5>
                    <input type='Email' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} required />
                    <h5>Password</h5>
                    <input type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
                    <h5>contact No :</h5>
                    <input type='number' placeholder='Enter your phone no' onChange={(e) => setPhone(e.target.value)} required />
                    <button type='submit' className='loginsignbtn'>Register</button>
                    <p onClick={handleClick} className="register_para" >Alredy Register Login in?</p>
                </form>
            </div>
        </div>

    )
}

export default Register