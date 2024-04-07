import "./Patient.scss";
import React from 'react';

const RPatient = () =>{
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const pat = {
      name:e.target.name.value,
      dob:e.target.dob.value,
      aadhar:e.target.aadhar.value,
      contact:e.target.contact.value,
      wAdd:e.target.wAdd.value,
      gender:e.target.gender.value,
    }
    
    console.log(pat["name"]);
    // Add your logic for frontend processing here
  }

  return(
    <div className="full-content">
      <div className="container">
        <div className="title">Patient Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit} method="post">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" name="name"  placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <span className="details">DOB</span>
                <input type="date" name="dob"    placeholder="Enter your DOB" required/>
              </div>
              <div className="input-box">
                <span className="details">Aadhar Number</span>
                <input type="number" name="aadhar"  placeholder="Enter your aadhar" required/>
              </div>
              <div className="input-box">
                <span className="details">Contact Details</span>
                <input type="number" name="contact"  placeholder="Enter your number" required/>
              </div>
              <div className="input-box">
                <span className="details">Wallet Address</span>
                <input type="text" name="wAdd"    placeholder="Eg. 0x1F8E7..." required/>
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender"  value="male" id="dot-1"/>
              <input type="radio" name="gender"  value="female"id="dot-2"/>
              <input type="radio" name="gender"  value="other" id="dot-3"/>
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one" ></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two" ></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RPatient;
