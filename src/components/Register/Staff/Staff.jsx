import React from 'react';
import { Box } from '@mui/material';
import "./Staff.scss";

function RStaff({ account, contract, provider }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAdd = e.target.newAddress.value;
    console.log("new staff : ", newAdd);
    const signer = contract.connect(provider.getSigner());
    const tx = await signer.changeStaff(newAdd);
    console.log(tx);
    // console.log("new staff : " ,newAdd);
    // console.log("Status : ",tx);
    tx.wait().then(async (receipt) => {
      console.log(receipt);
      if (receipt && receipt.status === 1) {
        // transaction success.
        alert("Transaction mined Successfully");
      }
    });
  }

  return (
    <Box m="20px" display="block">
      <Box textTransform="uppercase" m="20px">Current Staff : </Box>
      <Box m="20px">
        <form onSubmit={handleSubmit}>
          <Box className="inp-box-staff">
            <span className="head-staff">Change Staff :</span>
            <input type='text' name="newAddress" placeholder='Enter New Address' />
          </Box>
          <Box className="btn">
            <input type="submit" value="CHANGE" />
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default RStaff;
