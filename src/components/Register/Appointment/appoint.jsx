import "./appoint.scss";
import React from 'react';

const Appoint = () =>{
  return(
    <div className="full-content">
      <div className="container">
        <div className="title">Patient Appointment</div>
        <div className="content">
          <form method="post">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" name="name" placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <span className="details">Age</span>
                <input type="number" name="age" placeholder="Enter your Age" required/>
              </div>
              <div className="input-box">
                <span className="details">Preferred Time Slot</span>
                <input type="time" name="timeSlot" placeholder="Preferred time slot" required/>
              </div>
              <div className="input-box">
                <span className="details">Contact Details</span>
                <input type="number" name="contact" placeholder="Enter your number" required/>
              </div>
              <div className="input-box">
                <span className="details">What services are you interested in?</span>
                <input type="text" name="interest" id="" placeholder=""/>
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1"/>
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appoint;
