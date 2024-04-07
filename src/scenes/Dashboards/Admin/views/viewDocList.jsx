import React from 'react'
import "./viewDocList.scss";

function ViewDocList() {
  return (
    <div className='ta'>
      <table>
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Name</th>
            <th>Aadhar Details</th>
            <th>Contact</th>
            <th>Specialization</th>
            <th>Wallet Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Render your doctor list here */}
        </tbody>
      </table>
    </div>
  )
}

export default ViewDocList
