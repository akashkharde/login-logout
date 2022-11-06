import React, { useState } from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        timeOfDay = 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Good Afternoon';
    } else {
        timeOfDay = 'Good Evening';

    }


    let myname = localStorage.getItem('UserName').replace(/"/g, "");
    return (
        <div className='header'>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to='/home'>
                        <img
                            className='navbar_logo'
                            src='https://www.designfreelogoonline.com/wp-content/uploads/2021/07/3D-colorful-tech-logo-maker-e1626505840664.jpg'
                            alt='logo'
                        />
                    </Link>
                    <div>
                        <h3>Welcome{" " + myname} </h3>
                        <div>
                        <span className='mytime' >{timeOfDay}</span>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="">
                                <Link to="/home" className="nav-link  active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/profile' className="nav-link  " > Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactUs" className="nav-link  " >Contact us</Link>
                            </li>
                        </ul>
                        <Link to='/'>
                            <button className="btn btn-outline-success" type="submit">Log Out</button>
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header