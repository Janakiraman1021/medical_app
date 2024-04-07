import React, { useState } from 'react'
import { Web3Storage } from 'web3.storage'
import { Box } from '@mui/material';
import "./UploadDoc.scss";

function UploadDoc() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No File Selected");

  async function main(e) {
    e.preventDefault();

    const apiToken = 'your_web3_storage_api_token_here';
    const client = new Web3Storage({ token: apiToken });

    if (file) {
      console.log(`Uploading file`);
      const cid = await client.put([file]);
      console.log('Content added with CID:', cid);
      alert("File uploaded successfully!");
      setFileName("No File Selected");
      setFile(null);
    } else {
      console.log("No file selected!");
    }
  }

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    if (data) {
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data);
      reader.onloadend = () => {
        setFile(e.target.files[0]);
      }
      setFileName(e.target.files[0].name);
    } else {
      console.log("Please choose a file.");
    }
  }

  return (
    <Box m="20px" display="block" className="cont-up" >
      <Box textTransform="uppercase" textAlign="center" marginTop="40px" marginBottom="150px" fontSize="25px">Upload Document</Box>
      <Box className="top">
        <form className="form" onSubmit={main}>
          <Box display="flex" textAlign="center" justifyContent="center">
            <label htmlFor="file-upload" className="choose" style={{ marginRight: "10px", textTransform: "uppercase" }}>
              Choose File :
            </label>
            <input type="file" id="file-upload" name="data" onChange={retrieveFile} />
            <span className="textArea">FILE: {fileName}</span>
            <button type="submit" className="upload" disabled={!file}>Upload</button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default UploadDoc;
