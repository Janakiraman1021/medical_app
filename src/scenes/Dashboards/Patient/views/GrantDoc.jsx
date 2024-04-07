import React, { useEffect, useState } from 'react'
import "./GrantDoc.scss";

function GrantDoc() {
  const [list,setList] = useState([]);
  
  useEffect(() => {
    // Mock data for demonstration
    const mockData = [
      { id: 1, name: 'Doctor 1', adhaar_number: '123456789', contact: '1234567890', specialization: 'Cardiologist', walletAddress: '0x1F8E7' },
      { id: 2, name: 'Doctor 2', adhaar_number: '987654321', contact: '9876543210', specialization: 'Dermatologist', walletAddress: '0x2DC03' }
    ];

    setList(mockData);
  }, []);

  const handleGrant = (e, doc_id) => {
    e.preventDefault();
    console.log("Grant access to doctor:", doc_id);
    // Add your grant access logic here
  }

  const handleRevoke = (e, doc_id) => {
    e.preventDefault();
    console.log("Revoke access from doctor:", doc_id);
    // Add your revoke access logic here
  }

  return (
    <div className='al'>
        <table>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Name</th>
              <th>Aadhar Details</th>
              <th>Contact</th>
              <th>Specialization</th>
              <th>Wallet Address</th>
              <th>Access</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((val, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{val.name}</td>
                <td>{val.adhaar_number}</td>
                <td>{val.contact}</td>
                <td>{val.specialization}</td>
                <td>{val.walletAddress}</td>
                <td><button onClick={e => handleGrant(e, val.id)}>Grant</button></td>
                <td><button onClick={e => handleRevoke(e, val.id)}>Revoke</button></td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  )
}

export default GrantDoc;
