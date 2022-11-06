import React, { useState } from 'react'
import '../css/Profile.css';


function Profile() {

  let myname = localStorage.getItem('Name').replace(/"/g, "");
  let myEmail = localStorage.getItem('Email').replace(/"/g, "");
  let myUsername = localStorage.getItem('UserName').replace(/"/g, "");
  let Contact = localStorage.getItem('Phone').replace(/"/g, "");
  let Profile = localStorage.getItem('Profile');
  console.log(Profile)

  // const [profile, setProfile] = useState([]);

  // const imageUpload = (e) =>{
  //   console.log(e.target.value);
  //   localStorage.setItem("Profile", JSON.stringify(profile))
  // }

  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      localStorage["fileBase64"] = base64;
      console.debug("file stored", base64);
    });
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }



  return (
    <div className="profile">
      <div className='profile_con'>
        <h1>Welcome{" " + myUsername}</h1>
        <p>Name: {' ' + myname}</p>
        <p>Email:{" " + myEmail}</p>
        <p>Username:{" " + myUsername}</p>
        <p>Contact No:{" " + Contact}</p>
        <h5>Update Your Profile photo</h5>
        <input type='file' id='imgFile' name='imgupload' onChange={imageUpload} />
        {/* <img className='profile_pic' src={Profile} alt='profile' /> */}
      </div>
    </div>
  );

}

export default Profile