import React from 'react'
import "./ManageAppoint.scss";

function ManageAppoint() {
  return (
    <div className='manage-appt'>
      <table>
        <thead>
          <tr>
            <th>Appointment No.</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Wallet Address</th>
            <th>Department to Visit</th>
            <th>Time Slot</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {/* Render your appointment details here */}
        </tbody>
      </table>
    </div>
  )
}

export default ManageAppoint
