import React from 'react'
import "./viewPatList.scss";

function ViewPatList() {
  return (
    <div className='pat-list-new'>
      <table>
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Patient's Wallet Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Render your patient list here */}
        </tbody>
      </table>
    </div>
  )
}

export default ViewPatList
